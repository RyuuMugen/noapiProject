import {
  Button,
  ComboboxItem,
  Flex,
  Select,
  Text,
  TextInput,
} from "@mantine/core";
import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { IconChevronDown, IconCash } from "@tabler/icons-react";
import { useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";
import LoadingModal from "./ModalLoading";
import Parameterproduct from "./parameterProduct";

interface Product {
  categoryName: string;
  name: string;
  price: number;
  categoryId: string;
}

const FormBuildPcAi = ({ data }: any) => {
  const [loading, setLoading] = useState(false);
  const [dataPara, setDataParam] = useState();
  const [priceTarget, setPrice] = useState();
  const [currentComponent, setCurrentComponent] = useState(0);
  const arrayCategoryName = [
    "Bàn phím",
    "Tai nghe",
    "Màn hình",
    "Loa",
    "Chuột",
  ];

  const form = useForm({
    initialValues: {
      spend: "",
      type: "",
    },
    validate: {
      spend: (value) => {
        if (!value) {
          return "Yêu cầu nhập số tiền bạn muốn chi trả";
        } else {
          if (Number(value) < 5000000) {
            return "Số tiền không thể dưới 5.000.000VND";
          } else {
            return null;
          }
        }
      },
      type: (value) => (value === "" ? "Please select a PC type" : null),
    },
  });

  const handleSubmit = (values: any) => {
    setLoading(true);
    setCurrentComponent(1);
    setPrice(values.spend);
    setTimeout(async () => {
      const firebaseConfig = {
        apiKey: "AIzaSyCORwwB0ZJixQhlr5zYCJnrETx6ClZsDQ8",
        authDomain: "test-2c9a0.firebaseapp.com",
        projectId: "test-2c9a0",
        storageBucket: "test-2c9a0.appspot.com",
        messagingSenderId: "432649207852",
        appId: "1:432649207852:web:41c871d514edb1bf6d1189",
        measurementId: "G-XKSSCK55JJ",
      };

      initializeApp(firebaseConfig);

      const db = getFirestore();

      const colRef = collection(db, "products");

      const dataItem = await getDocs(colRef)
        .then((snapshot) => {
          let data: any = [];
          let arrays: any = [];
          let ram: any = [];
          let cpu: any = [];
          let storage: any = [];
          let cases: any = [];
          let power: any = [];
          let gpu: any = [];
          let motherBoard: any = [];
          let cooler: any = [];

          snapshot.docs.forEach((doc, index) => {
            if (
              doc.data().categoryName === "HDD" &&
              doc.data().price !== null
            ) {
              storage.push({ ...doc.data(), id: doc.id });
            } else if (
              doc.data().categoryName === "VGA" &&
              doc.data().price !== null
            ) {
              gpu.push({ ...doc.data(), id: doc.id });
            } else if (
              doc.data().categoryName === "RAM" &&
              doc.data().price !== null
            ) {
              ram.push({ ...doc.data(), id: doc.id });
            } else if (
              (doc.data().categoryName === "Quạt làm mát" ||
                doc.data().categoryName === "Tản nhiệt nước" ||
                doc.data().categoryName === "Tản nhiệt khí") &&
              doc.data().price !== null
            ) {
              cooler.push({ ...doc.data(), id: doc.id });
            } else if (
              doc.data().categoryName === "Nguồn" &&
              doc.data().price !== null
            ) {
              power.push({ ...doc.data(), id: doc.id });
            } else if (
              doc.data().categoryName === "Vỏ case" &&
              doc.data().price !== null
            ) {
              cases.push({ ...doc.data(), id: doc.id });
            } else if (
              doc.data().categoryName === "Bo mạch chủ" &&
              doc.data().price !== null
            ) {
              motherBoard.push({ ...doc.data(), id: doc.id });
            } else if (
              doc.data().categoryName === "Bộ vi xử lý" &&
              doc.data().price !== null
            ) {
              cpu.push({ ...doc.data(), id: doc.id });
            } else {
              return;
            }
          });

          arrays = [cpu, gpu, ram, motherBoard, cases, cooler, power, storage];
          console.log(arrays);

          data = findCombinationsRecursive(arrays, values.spend);

          console.log(data);
          // arr = findProductSubsets(itemPc, values.spend)[0]
          return data[0];
        })
        .catch((err) => {
          console.log(err.message);
        });

      setDataParam(dataItem);
      setLoading(false);
      setCurrentComponent(2);
    }, 2000);
  };

  function findCombinationsRecursive(arrays: any, targetPrice: any) {
    const results: any = [];

    function findCombination(
      currentCombination: any,
      remainingTarget: any,
      arrayIndex: any
    ) {
      if (currentCombination.length === arrays.length) {
        if (remainingTarget === 0) {
          results.push([...currentCombination]);
        }
        return;
      }

      if (arrayIndex >= arrays.length) {
        return;
      }

      if (!results[0]) {
        for (let item of arrays[arrayIndex]) {
          findCombination(
            [...currentCombination, item],
            remainingTarget - item.price,
            arrayIndex + 1
          );
        }
      }
    }
    findCombination([], targetPrice, 0);
    return results;
  }

  // const checkArray = (products: Product[]) => {
  //   if (products.length !== 8) {
  //     return 0
  //   }

  //   const productNames = products.map((product) => product.categoryId)
  //   if (new Set(productNames).size !== productNames.length) {
  //     return 0
  //   }
  //   return 1
  // }

  // function findProductSubsets(
  //   products: Product[],
  //   targetPrice: string
  // ): Product[][] {
  //   const result: Product[][] = []
  //   const hashMap = new Map<number, Product[][]>()
  //   console.log(targetPrice)

  //   for (const currentProduct of products) {
  //     const diff = Number(targetPrice) - Number(currentProduct.price)

  //     if (diff >= 0) {
  //       if (hashMap.has(diff)) {
  //         const subsetsWithDiff = hashMap.get(diff)
  //         if (subsetsWithDiff) {
  //           for (const subset of subsetsWithDiff) {
  //             result.push([...subset, currentProduct])
  //           }
  //         }
  //       }
  //     }

  //     const newEntries = new Map<number, Product[][]>()

  //     for (const [key, subsets] of hashMap.entries()) {
  //       const newKey = Number(key) + Number(currentProduct.price)

  //       if (newKey === Number(targetPrice)) {
  //         result.push([...subsets[0], currentProduct])
  //       }
  //       if (!newEntries.has(newKey)) {
  //         newEntries.set(newKey, [])
  //       }
  //       for (const subset of subsets) {
  //         newEntries.get(newKey)!.push([...subset, currentProduct])
  //       }
  //     }

  //     if (!hashMap.has(currentProduct.price)) {
  //       hashMap.set(currentProduct.price, [[currentProduct]])
  //     } else {
  //       hashMap.get(currentProduct.price)!.push([currentProduct])
  //     }

  //     for (const [key, value] of newEntries.entries()) {
  //       if (!hashMap.has(key)) {
  //         hashMap.set(key, value)
  //       } else {
  //         hashMap.get(key)!.push(...value)
  //       }
  //     }
  //   }

  //   const a: Product[][] = []
  //   const threshold = 100000
  //   for (const [key, subsets] of hashMap.entries()) {
  //     const distance = Math.abs(Number(key) - Number(targetPrice))
  //     if (distance <= threshold) {
  //       subsets.forEach((item: any) => {
  //         if (checkArray(item) === 1) {
  //           a.push(item)
  //         }
  //       })
  //     }
  //   }

  //   console.log(a, hashMap)

  //   return a
  // }
  const handlePrevious = () => {
    setCurrentComponent(0);
  };

  return (
    <>
      {currentComponent === 0 && (
        <form onSubmit={form.onSubmit(handleSubmit)} style={{ width: "100%" }}>
          <Flex
            justify="center"
            align="flex-start"
            direction="column"
            w="100%"
            gap="1rem"
          >
            <TextInput
              key="spend"
              {...form.getInputProps("spend")}
              fz={14}
              label="Nhập số tiền bạn định xây dựng cấu hình!"
              placeholder="Nhập giá tiền(VNĐ)"
              w="100%"
              withAsterisk
              rightSection={<IconCash size={24} fontWeight={500} />}
            />
            <Select
              key="type"
              {...form.getInputProps("type")}
              fz={14}
              checkIconPosition="right"
              label="Loại PC"
              allowDeselect
              data={data}
              placeholder="Chọn loại PC"
              rightSection={<IconChevronDown size={24} />}
              w="100%"
              clearable
            />
          </Flex>
          <Flex
            justify="center"
            align="center"
            direction="column"
            gap="1rem"
            w="100%"
          >
            <Text pt={10} pb={5} fz={12}>
              Sắp có thêm nhiều lựa chọn...
            </Text>
            <Button
              type="submit"
              variant="filled"
              color="rgb(238, 77, 45)"
              w="100%"
              p="10px 14px"
            >
              Nhận PC của tôi
            </Button>
          </Flex>
        </form>
      )}
      {loading === true && currentComponent === 1 && (
        <LoadingModal opened={loading} />
      )}
      {loading === false && currentComponent === 2 && (
        <Parameterproduct
          data={dataPara}
          type={form.values.type}
          priceTarget={priceTarget}
          setPage={handlePrevious}
        />
      )}
    </>
  );
};

export default FormBuildPcAi;
