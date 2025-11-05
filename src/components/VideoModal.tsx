import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { X } from "lucide-react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoSrc: string;
  title: string;
}

const VideoModal = ({ isOpen, onClose, videoSrc, title }: VideoModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-full p-0 bg-card border-border">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="text-2xl">{title}</DialogTitle>
        </DialogHeader>
        <div className="p-6 pt-4">
          <video
            src={videoSrc}
            controls
            autoPlay
            className="w-full rounded-lg"
            controlsList="nodownload"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VideoModal;
