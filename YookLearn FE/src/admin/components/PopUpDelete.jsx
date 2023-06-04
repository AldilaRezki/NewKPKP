import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import "@headlessui/react/dist/index.css";

const PopUpDelete = ({ isOpen, onClose, onDelete }) => {
  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      className="fixed z-10 inset-0 overflow-y-auto"
    >
      <div className="flex items-center justify-center min-h-screen p-4">
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />

        <div className="bg-white rounded p-8 max-w-md mx-auto">
          <Dialog.Title className="text-lg font-medium mb-4">
            Are you sure you want to delete?
          </Dialog.Title>

          <div className="flex justify-end">
            <button
              onClick={onClose}
              className="mr-2 px-4 py-2 text-sm font-medium text-gray-600 bg-gray-200 hover:bg-gray-300 rounded"
            >
              Cancel
            </button>
            <button
              onClick={onDelete}
              className="px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

const App = () => {
  const [isDeleteDialogOpen, setDeleteDialogOpen] = useState(false);

  const handleDelete = () => {
    // Perform delete operation
    // ...

    // Close the delete confirmation dialog
    setDeleteDialogOpen(false);
  };

  return (
    <div className="container mx-auto mt-8">
      <button
        onClick={() => setDeleteDialogOpen(true)}
        className="px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded"
      >
        Delete Item
      </button>

      <DeleteConfirmationDialog
        isOpen={isDeleteDialogOpen}
        onClose={() => setDeleteDialogOpen(false)}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default PopUpDelete;
