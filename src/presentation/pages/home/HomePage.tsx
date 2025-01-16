import { useState, useRef, DragEvent, ChangeEvent } from "react";
import './HomePage.scss';
import SvgIconClose from "../../SvgIconClose.tsx";
import SvgIconUpload from "../../SvgIconUpload.tsx";
import { humanFileSize } from "../../../core/utils/utils.ts";
import SvgIconCancel from "../../SvgIconCancel.tsx";
import { getDownloadURL, ref, uploadBytesResumable, UploadTask } from "firebase/storage";
import { storage } from "../../../core/firebase/firebase.config.ts";

interface IHomePageProps {
  onUploadComplete?: (url: string) => void;
}

interface IFileUpload {
  file: File;
  progress: number;
  error: string | null;
  downloadURL: string | null;
  uploadTask: UploadTask | null;
}

export default function HomePage(props: IHomePageProps) {
  const [fileUploads, setFileUploads] = useState<IFileUpload[]>([]);
  const [dragActive, setDragActive] = useState(false);
  const [urlInput, setUrlInput] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const ALLOWED_TYPES = ['image/jpeg', 'image/jpg', 'image/png'];
  const MAX_FILES = 5;

  const validateFiles = (filesToValidate: File[]): File[] => {
    const availableSlots = MAX_FILES - fileUploads.length;
    return filesToValidate.filter(file =>
      ALLOWED_TYPES.includes(file.type)
    ).slice(0, availableSlots);
  };

  const handleFileChange = (selectedFiles: FileList | null) => {
    if (!selectedFiles || selectedFiles.length === 0) return;

    const newFiles = validateFiles(Array.from(selectedFiles));

    if (newFiles.length > 0) {
      const filesToUpload: IFileUpload[] = newFiles.map(file => ({
        file,
        progress: 0,
        error: null,
        downloadURL: null,
        uploadTask: null,
      }));

      setFileUploads(prev => [...prev, ...filesToUpload]);

      filesToUpload.forEach((fileUpload, index) => {
        const currentIndex = fileUploads.length + index;
        const storageRef = ref(storage, `uploads/${Date.now()}_${fileUpload.file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, fileUpload.file);
        // Update the uploadTask in state
        setFileUploads(prev => {
          const updated = [...prev];
          updated[currentIndex].uploadTask = uploadTask;
          return updated;
        });

        uploadTask.on('state_changed',
          (snapshot) => {

            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setFileUploads(prevUploads => prevUploads.map((upload, i) => {
              if (i === currentIndex) {
                return { ...upload, progress: Math.round(progress) };
              }
              return upload;
            }));
          },
          (error) => {

            setFileUploads(prevUploads => prevUploads.map((upload, i) => {
              if (i === currentIndex) {
                return { ...upload, error: error.message };
              }
              return upload;
            }));
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((url) => {
              setFileUploads(prevUploads => prevUploads.map((upload, i) => {
                if (i === currentIndex) {
                  if (props.onUploadComplete) props.onUploadComplete(url);
                  return { ...upload, downloadURL: url };
                }
                return upload;
              }));
            });
          }
        );
      });
    }
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files) {
      handleFileChange(e.dataTransfer.files);
    }
  };

  const handleRemoveFile = (index: number) => {
    const upload = fileUploads[index];

    if (upload.uploadTask) {
      upload.uploadTask.cancel();
    }

    const updatedUploads = [...fileUploads];
    updatedUploads.splice(index, 1);
    setFileUploads(updatedUploads);
  };

  const handleDrag = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleUploadFromURL = async () => {
    if (!urlInput) {
      setFileUploads(prev => [...prev, {
        file: new File([], ''),
        progress: 0,
        error: 'URL is empty',
        downloadURL: null,
        uploadTask: null,
      }]);
      return;
    }

    try {
      const response = await fetch(urlInput);
      console.log(response)
      if (!response.ok) {
        throw new Error('Failed to fetch the file from the URL');
      }
      const blob = await response.blob();
      const filename = urlInput.split('/').pop() || 'file';
      const file = new File([blob], filename, { type: blob.type });

      // Reuse handleFileChange by creating a FileList
      const dataTransfer = new DataTransfer();
      dataTransfer.items.add(file);
      handleFileChange(dataTransfer.files);
      setUrlInput('');
    } catch (err) {
      console.log(err)
      setFileUploads(prev => [...prev, {
        file: new File([], ''),
        progress: 0,
        error: 'Failed to upload from URL',
        downloadURL: null,
        uploadTask: null,
      }]);
    }
  };

  return (
    <div className="wrapper h-full flex items-center justify-center">
      <div className="upload-container p-6 rounded-3xl bg-white shadow-md">
        <div className="header flex items-center justify-between">
          <div className="title flex flex-col pr-10">
            <h1 className="text-xl font-bold mb-0.5">Media upload</h1>
            <span>Add your document here, and you can upload up to 5 files</span>
          </div>
          <div className="btn-close">
            <button>
              <SvgIconClose/>
            </button>
          </div>
        </div>
        <div
          className={`main-container border-dashed border-2 border-[#635BFF] rounded-lg my-4 cursor-pointer
            ${dragActive ? 'bg-[#E7ECFC]' : ''}`}
          onClick={handleClick}
          onDrop={handleDrop}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
        >
          <input
            ref={fileInputRef}
            type="file"
            multiple
            accept=".jpg,.jpeg,.png"
            className="hidden"
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleFileChange(e.target.files)}
          />
          <div className="flex items-center justify-center flex-col p-6">
            <div>
              <SvgIconUpload/>
            </div>
            <div className="mt-3 mb-2">
              <span>Drag your file(s) or browse</span>
            </div>
          </div>
        </div>
        <div className="">
          <div>
            <span>Only supported file types: .jpg, .jpeg, .png</span>
          </div>
        </div>
        <div className="flex items-center justify-center my-4">
          <div className="h-0.5 bg-gray-100 w-full"/>
          <div className="mx-2 uppercase">
            <p>or</p>
          </div>
          <div className="h-0.5 bg-gray-100 w-full"/>
        </div>
        <div className="upload-from-url">
          <div className="mb-4">
            <h1>Upload from URL</h1>
          </div>
          <div className="flex justify-between items-center border-2 border-[#635BFF] px-4 py-5 rounded-xl">
            <div className="w-full mr-4">
              <input
                type="text"
                placeholder="Enter URL"
                value={urlInput}
                onChange={(e) => setUrlInput(e.target.value)}
                className="w-full outline-none"
              />
            </div>
            <button
              className="bg-[#635BFF] px-4 py-2 text-white rounded-xl"
              onClick={handleUploadFromURL}
            >
              Upload
            </button>
          </div>
        </div>
        <div>
          <div className={`list-file-uploaded mt-4 ${fileUploads.length === 0 ? 'hidden' : 'overflow-y-scroll max-h-72'}`}>
            {fileUploads.map((upload, index) => (
              <div
                key={index}
                className={`border rounded-lg p-4 flex flex-col justify-between items-start mb-4`}
              >
                <div className="flex justify-between w-full">
                  <div>
                    <span>{upload.file.name || 'URL Upload'}</span>
                    <span>{upload.file.size ? humanFileSize(upload.file.size) : ''}</span>
                  </div>
                  <button onClick={() => handleRemoveFile(index)}>
                    <SvgIconCancel/>
                  </button>
                </div>
                {upload.progress > 0 && upload.progress < 100 && (
                  <div className="w-full bg-gray-200 rounded-full mt-2">
                    <div
                      className="bg-blue-600 text-xs leading-none py-1 text-center text-white rounded-full"
                      style={{ width: `${upload.progress}%` }}
                    >
                      {upload.progress}%
                    </div>
                  </div>
                )}
                {upload.error && <p className="text-red-500">Error: {upload.error}</p>}
                {upload.downloadURL && (
                  <a href={upload.downloadURL} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                    View File
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
