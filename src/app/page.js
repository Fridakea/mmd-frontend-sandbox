import CookiePopup from "@/components/CookiePopup";
import Show from "@/components/Show";

export default function Home() {
  const hasGivenConsent = true;

  return (
    <div>
      <Show condition={hasGivenConsent}>
        <CookiePopup />
      </Show>
    </div>
  );
}
