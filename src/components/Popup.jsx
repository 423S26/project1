import { Dialog, DialogTitle, DialogContent } from "@mui/material";

function Popup({ open, onClose, title, children }) {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>{title}</DialogTitle>

      <DialogContent>
        {children}
      </DialogContent>
    </Dialog>
  );
}

export default Popup;