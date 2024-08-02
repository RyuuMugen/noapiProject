import React from "react";
import { Editor } from "@tinymce/tinymce-react";

const TinyMCEEditor = ({
  contentText,
  setValue,
}: {
  contentText: string;
  setValue: (value: any) => void;
}) => {
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  const handleEditorChange = (content: string) => {
    // Clear any previous timeout to avoid multiple calls
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Set a new timeout for 4 seconds delay
    timeoutRef.current = setTimeout(() => {
      setValue(content);
    }, 4000);
  };

  const handleImageUpload = (
    blobInfo: any,
    success: (url: string) => void,
    failure: (message: string) => void
  ) => {
    const reader = new FileReader();

    reader.onload = () => {
      // Convert image file to base64 string
      const base64 = reader.result as string;
      success(base64);
    };

    reader.onerror = () => {
      failure("Failed to read file");
    };

    if (blobInfo.blob()) {
      reader.readAsDataURL(blobInfo.blob());
    }
  };

  return (
    <Editor
      apiKey="wwheiwaj492tbs9774t0z89v05r3xt8eg1ljilyc5d784xsv"
      initialValue={contentText}
      init={{
        height: 500,
        menubar: true,
        plugins: [
          "advlist autolink lists link image charmap print preview anchor",
          "searchreplace visualblocks code fullscreen",
          "insertdatetime media table paste code help wordcount",
          "table",
          "image",
          "wordcount",
          "link",
          "media",
        ],
        toolbar:
          "undo redo | blocks | formatselect | bold italic backcolor | link | \
          alignleft aligncenter alignright alignjustify | wordcount | \
          bullist numlist outdent indent | removeformat | help | image | media | \
          table",
        image_title: true,
        automatic_uploads: true,
        file_picker_types: "image",
        file_picker_callback: (callback, value, meta) => {
          if (meta.filetype === "image") {
            const input = document.createElement("input");
            input.setAttribute("type", "file");
            input.setAttribute("accept", "image/*");
            input.addEventListener("change", function () {
              const fileList = this.files;
              if (fileList && fileList.length > 0) {
                const file = fileList[0];
                handleImageUpload(
                  { blob: () => file },
                  (url) => callback(url, { alt: "My alt text" }),
                  (message) => console.error(message)
                );
              }
            });
            input.click();
          }
        },
      }}
      onEditorChange={handleEditorChange}
    />
  );
};

export default TinyMCEEditor;
