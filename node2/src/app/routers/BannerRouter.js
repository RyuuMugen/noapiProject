const express = require("express");
const router = express.Router();
const BannerModel = require("../models/BannerModel");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "assets/Banner/"); // Thư mục để lưu trữ file ảnh
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname); // Tên file sẽ được lưu trữ
  },
});

const upload = multer({ storage: storage });
/**
 * @swagger
 * tags:
 *   name: Banners
 *   description: Quản lý banner
 */
/**
 * @swagger
 * /banners/get-list:
 *   get:
 *     summary: Lấy danh sách tất cả banner
 *     tags: [Banners]
 *     responses:
 *       200:
 *         description: Thành công
 *       500:
 *         description: Lỗi máy chủ
 */
router.get("/get-list", (req, res) => {
  BannerModel.getList((result) => {
    res.status(200).json(result);
  });
});

/**
 * @swagger
 * /banners/banner-detail/{id}:
 *   get:
 *     summary: Lấy thông tin chi tiết banner
 *     tags: [Banners]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID của banner
 *     responses:
 *       200:
 *         description: Thành công
 *       404:
 *         description: Không tìm thấy
 *       500:
 *         description: Lỗi máy chủ
 */
router.get("/banner-detail/:id", (req, res) => {
  const id = req.params.id;
  BannerModel.getDetail(id, (result) => {
    res.status(200).json(result);
  });
});

/**
 * @swagger
 * /banners/status/{status}:
 *   get:
 *     summary: Lấy danh sách banner theo trạng thái
 *     tags: [Banners]
 *     parameters:
 *       - in: path
 *         name: status
 *         schema:
 *           type: integer
 *         required: true
 *         description: Trạng thái của banner
 *     responses:
 *       200:
 *         description: Thành công
 *       500:
 *         description: Lỗi máy chủ
 */
router.get("/status/:status", (req, res) => {
  const status = req.params.status;

  BannerModel.getListByStatus(status, (result) => {
    res.status(result.success ? 200 : 400).json(result);
  });
});

/**
 * @swagger
 * /banners/trash/{trash}:
 *   get:
 *     summary: Lấy danh sách banner theo trạng thái trash
 *     tags: [Banners]
 *     parameters:
 *       - in: path
 *         name: trash
 *         schema:
 *           type: integer
 *         required: true
 *         description: Trạng thái trash của banner
 *     responses:
 *       200:
 *         description: Thành công
 *       500:
 *         description: Lỗi máy chủ
 */
router.get("/trash/:trash", (req, res) => {
  const trash = req.params.trash;

  BannerModel.getListByTrash(trash, (result) => {
    res.status(result.success ? 200 : 400).json(result);
  });
});

/**
 * @swagger
 * /banners/get-lists:
 *   get:
 *     summary: Lấy danh sách banner với giới hạn và phân trang
 *     tags: [Banners]
 *     parameters:
 *       - in: query
 *         name: take
 *         schema:
 *           type: integer
 *         description: Số lượng banner cần lấy
 *       - in: query
 *         name: skip
 *         schema:
 *           type: integer
 *         description: Số lượng banner cần bỏ qua
 *       - in: query
 *         name: status
 *         schema:
 *           type: integer
 *         description: Trạng thái của banner
 *       - in: query
 *         name: trash
 *         schema:
 *           type: integer
 *         description: Trạng thái trash của banner
 *     responses:
 *       200:
 *         description: Thành công
 *       500:
 *         description: Lỗi máy chủ
 */
router.get("/get-lists", (req, res) => {
  const take = parseInt(req.query.take);
  const skip = parseInt(req.query.skip);
  const status = req.query.status;
  const trash = req.query.trash;

  const fields = [];
  const values = [];

  if (status) {
    fields.push("status");
    values.push(status);
  }

  if (trash) {
    fields.push("trash");
    values.push(trash);
  }

  if (fields.length > 0) {
    UserCommentModel.getListWithLimitOffsetByFields(
      fields,
      values,
      take,
      skip,
      (result) => {
        res.status(result.success ? 200 : 400).json(result);
      }
    );
  } else {
    UserCommentModel.getListWithLimitOffset(take, skip, (result) => {
      res.status(200).json(result);
    });
  }
});
/**
 * @swagger
 * /banners/create:
 *   post:
 *     summary: Tạo banner mới
 *     tags: [Banners]
 *     consumes:
 *       - multipart/form-data
 *     parameters:
 *       - in: formData
 *         name: image
 *         type: file
 *         description: Ảnh banner
 *       - in: formData
 *         name: date_start
 *         type: string
 *         description: Ngày bắt đầu
 *       - in: formData
 *         name: date_end
 *         type: string
 *         description: Ngày kết thúc
 *       - in: formData
 *         name: status
 *         type: integer
 *         description: Trạng thái
 *       - in: formData
 *         name: trash
 *         type: integer
 *         description: Trash
 *       - in: formData
 *         name: title
 *         type: string
 *         description: Tiêu đề
 *     responses:
 *       201:
 *         description: Banner được tạo thành công
 *       400:
 *         description: Yêu cầu không hợp lệ
 *       500:
 *         description: Lỗi máy chủ
 */
router.post("/create", upload.single("image"), (req, res) => {
  const { date_start, date_end, status, trash, title } = req.body;
  const image = req.file ? req.file.path : ""; // Lưu đường dẫn của file ảnh vào trường avatar

  const newBanner = { date_start, date_end, status, trash, title, image };

  BannerModel.create(newBanner, (result) => {
    res.json(result);
  });
});

/**
 * @swagger
 * /banners/update/{id}:
 *   put:
 *     summary: Cập nhật banner
 *     tags: [Banners]
 *     consumes:
 *       - multipart/form-data
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID của banner
 *       - in: formData
 *         name: image
 *         type: file
 *         description: Ảnh banner
 *       - in: formData
 *         name: date_start
 *         type: string
 *         description: Ngày bắt đầu
 *       - in: formData
 *         name: date_end
 *         type: string
 *         description: Ngày kết thúc
 *       - in: formData
 *         name: status
 *         type: integer
 *         description: Trạng thái
 *       - in: formData
 *         name: trash
 *         type: integer
 *         description: Trash
 *       - in: formData
 *         name: title
 *         type: string
 *         description: Tiêu đề
 *     responses:
 *       200:
 *         description: Cập nhật thành công
 *       400:
 *         description: Yêu cầu không hợp lệ
 *       500:
 *         description: Lỗi máy chủ
 */
router.put("/update/:id", upload.single("image"), (req, res) => {
  const id = req.params.id;
  const updatedBanner = req.body;
  if (req.file) {
    updatedBanner.image = req.file.path; // Lưu đường dẫn của file ảnh vào trường avatar
  }

  BannerModel.update(id, updatedBanner, (result) => {
    res.status(200).json(result);
  });
});

/**
 * @swagger
 * /banners/status/{id}:
 *   put:
 *     summary: Cập nhật trạng thái banner
 *     tags: [Banners]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID của banner
 *     responses:
 *       200:
 *         description: Cập nhật thành công
 *       404:
 *         description: Không tìm thấy
 *       500:
 *         description: Lỗi máy chủ
 */
router.put("/status/:id", (req, res) => {
  const id = req.params.id;

  BannerModel.getDetail(id, (result) => {
    if (!result.success) {
      return res.status(404).json(result);
    }

    // Chuyển đổi trạng thái
    const newStatus = result.data.status === 0 ? 1 : 0;

    BannerModel.updateStatus(id, newStatus, (result) => {
      res.status(result.success ? 200 : 400).json(result);
    });
  });
});

/**
 * @swagger
 * /banners/trash/{id}:
 *   put:
 *     summary: Cập nhật trạng thái trash của banner
 *     tags: [Banners]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID của banner
 *     responses:
 *       200:
 *         description: Cập nhật thành công
 *       404:
 *         description: Không tìm thấy
 *       500:
 *         description: Lỗi máy chủ
 */
router.put("/trash/:id", (req, res) => {
  const id = req.params.id;

  BannerModel.getDetail(id, (result) => {
    if (!result.success) {
      return res.status(404).json(result);
    }
    // Chuyển đổi trạng thái
    const newStatus = result.data.trash === 0 ? 1 : 0;

    BannerModel.updateTrash(id, newStatus, (result) => {
      res.status(result.success ? 200 : 400).json(result);
    });
  });
});

/**
 * @swagger
 * /banners/delete/{id}:
 *   delete:
 *     summary: Xóa banner
 *     tags: [Banners]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID của banner
 *     responses:
 *       200:
 *         description: Xóa thành công
 *       404:
 *         description: Không tìm thấy
 *       500:
 *         description: Lỗi máy chủ
 */
router.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  BannerModel.delete(id, (result) => {
    res.status(200).json(result);
  });
});
module.exports = router;
