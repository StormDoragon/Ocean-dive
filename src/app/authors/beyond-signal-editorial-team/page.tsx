import { permanentRedirect } from "next/navigation";
import { editorialTeam } from "@/content/editorial";

export default function FormerEditorialTeamPage() {
  permanentRedirect(editorialTeam.url);
}
