import { UploadButton } from "@/utils/uploadthing";
import { useRouter } from "next/navigation";

export interface IUploadCareButtonProps {
  onUpload: (e: string) => any;
}

export default function UploadCareButton({ onUpload }: IUploadCareButtonProps) {
  const router = useRouter();

  return (
    <div>
      <UploadButton
        endpoint={"imageUploader"}
        onClientUploadComplete={async (res) => {
          console.log("Files>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> ", res[0].url);
          alert("Upload Completed");
          const file = await onUpload(res[0].url);
          if (file) {
            router.refresh();
          }
        }}
      />
    </div>
  );
}

// "use client";
// import React, { useEffect, useRef } from "react";
// import * as LR from "@uploadcare/blocks";
// import * as UC from "@uploadcare/file-uploader";
// import { useRouter } from "next/navigation";

// type Props = {
//   onUpload: (e: string) => any;
// };

// LR.registerBlocks(LR);
// UC.defineComponents(UC);

// const UploadCareButton = ({ onUpload }: Props) => {
//   const router = useRouter();
//   const ctxProviderRef = useRef<
//     typeof UC.UploadCtxProvider.prototype & UC.UploadCtxProvider
//   >(null);

//   useEffect(() => {
//     const handleUpload = async (e: any) => {
//       const file = await onUpload(e.detail.cdnUrl);
//       if (file) {
//         router.refresh();
//       }
//     };
//     ctxProviderRef.current.addEventListener(
//       "file-upload-success",
//       handleUpload
//     );
//   }, []);

//   return (
//     <>
//       <uc-config
//         ref={configRef}
//         ctx-name={uploaderCtxName}
//         pubkey="a6ca334c3520777c0045"
//         multiple={true}
//         sourceList="local, url, camera, dropbox, gdrive"
//         confirmUpload={false}
//         removeCopyright={true}
//         imgOnly={true}
//       ></uc-config>

//       <uc-file-uploader-regular
//         ctx-name={uploaderCtxName}
//         class={cs(uploaderClassName, { 'uc-dark': theme === 'dark', 'uc-light': theme === 'light' })}
//       ></uc-file-uploader-regular>

//       <uc-upload-ctx-provider
//         ref={ctxProviderRef}
//         ctx-name={uploaderCtxName}
//       />
//     </>
//   );
// };

// export default UploadCareButton;
