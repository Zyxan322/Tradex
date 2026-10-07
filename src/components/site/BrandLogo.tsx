import logo from "@/assets/tradex-logo.png";

type BrandLogoProps = {
  className?: string;
};

export function BrandLogo({ className }: BrandLogoProps) {
  return <img src={logo} alt="Tradex Auditing of Accounts LLC" className={className} />;
}
