import Image from "next/image";
import Link from "next/link";
import quizIcon from "../../public/svg/quiz_FILL0_wght400_GRAD0_opsz48.svg";
import settingsIcon from "../../public/svg/settings_FILL0_wght400_GRAD0_opsz48.svg";
import cardsIcon from "../../public/svg/style_FILL0_wght400_GRAD0_opsz48 (1).svg";

let iconStyle = "h-8";

export default function Navbar() {
  return (
    <footer className="flex flex-row justify-evenly items-center h-20 bottom-0 w-screen border-t-2 border-neutral-200 rounded-t-3xl overflow-hidden">
      <Link href="/quiz">
        <div className="flex flex-col">
          <Image alt="nav-item quiz" src={quizIcon} className={iconStyle} />
          <span className="text-center text-neutral-600">Quiz</span>
        </div>
      </Link>
      <Link href="/">
        <div className="flex flex-col">
          <Image alt="nav-item cards" src={cardsIcon} className={iconStyle} />
          <span className="text-center text-neutral-600">Card</span>
        </div>
      </Link>
      <div>
        <div className="flex flex-col">
          <Image
            alt="nav-item settings"
            src={settingsIcon}
            className={iconStyle}
          />
          <span className="text-center text-neutral-600">Setting</span>
        </div>
      </div>
    </footer>
  );
}
