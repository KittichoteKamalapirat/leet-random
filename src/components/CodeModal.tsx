import { Highlight, themes } from "prism-react-renderer";
import { HtmlHTMLAttributes, forwardRef } from "react";
import { cn } from "../utils/cn";

interface Props extends HtmlHTMLAttributes<HTMLDialogElement> {
  title: string;
  code: string;

  className?: string;
}
const CodeModal = forwardRef<HTMLDialogElement, Props>(
  ({ title, code, className, ...rest }: Props, ref) => {
    return (
      <dialog ref={ref} className={cn("modal", className)} {...rest}>
        <div className={cn("modal-box max-h-[90dvh] max-w-none")}>
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-lg">{title}</h3>
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>

          {/* code */}

          <Highlight theme={themes.oneDark} code={code} language="python">
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
              <pre style={style} className="p-8">
                {tokens.map((line, i) => (
                  <div key={i} {...getLineProps({ line })}>
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token })} />
                    ))}
                  </div>
                ))}
              </pre>
            )}
          </Highlight>
        </div>
      </dialog>
    );
  }
);

CodeModal.displayName = "CodeModal";
export default CodeModal;
