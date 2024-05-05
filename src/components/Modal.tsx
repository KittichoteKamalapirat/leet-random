import React, { HtmlHTMLAttributes, forwardRef } from "react";
import { cn } from "../utils/cn";

interface Props extends HtmlHTMLAttributes<HTMLDialogElement> {
  emoji: string;
  title: string;
  content: string;

  className?: string;
}

const Modal = forwardRef<HTMLDialogElement, Props>(
  ({ emoji, title, content, className, ...rest }, ref) => {
    return (
      <dialog ref={ref} className={cn("modal", className)} {...rest}>
        <div className="modal-box">
          <h2 className="font-bold text-7xl text-center ">{emoji}</h2>
          <h3 className="font-bold text-2xl mt-4 text-center">{title}</h3>
          <p className="py-4">{content}</p>
          <div className=" flex justify-center">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">close</button>
            </form>
          </div>
        </div>
        {/* there is a second form with 'modal-backdrop' class and it covers the screen so we can close the modal when clicked outside */}
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    );
  }
);

Modal.displayName = "Modal";
export default Modal;
