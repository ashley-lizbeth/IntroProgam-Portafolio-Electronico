import { Viewer, Worker } from "@react-pdf-viewer/core";

import "@react-pdf-viewer/core/lib/styles/index.css";

export default function PDFviewer({
  unit,
  activity,
}: {
  unit: string;
  activity: string;
}) {
  const file = `/IntroProgam-Portafolio-Electronico/docs/${unit}-${activity}.pdf`;
  return (
    <div className="flex flex-col justify-center items-center">
      <a href={file} target="_blank" className="">
        Enlace al archivo
      </a>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <div className="h-[1000px] w-[90%] shadow-lg scale-90">
          <Viewer fileUrl={file} />
        </div>
      </Worker>
    </div>
  );
}
