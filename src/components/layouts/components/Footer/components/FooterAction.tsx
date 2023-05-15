import { FC } from "react";

interface PropActionFooter {
    title: string,
    link1: string,
    link2: string,
    link3: string,
    link4: string,
    link5: string
}

const FooterAction: FC<PropActionFooter> = ({title, link1, link2, link3, link4, link5}) => {
  return (
    <div className="pt-4 text-sm">
      <div className="text-lg font-semibold text-blue-081857">{ title }</div>
      <ul>
        <li className="link-footer mt-2">{ link1 }</li>
        <li className="link-footer mt-2">{ link2 }</li>
        <li className="link-footer mt-2">{ link3 }</li>
        <li className="link-footer mt-2">{ link4 }</li>
        <li className="link-footer mt-2">{ link5 }</li>
      </ul>
    </div>
  );
};

export default FooterAction;
