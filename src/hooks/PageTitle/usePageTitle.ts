import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { APP_NAME, PageTitles } from "../../config/PageTitles";

export function usePageTitle() {
  const { pathname } = useLocation();

  useEffect(() => {
    let title = PageTitles[pathname];

    console.log("Current Path:", pathname); // ← check this
    document.title = "Testing Title | Notice of Intimation";

    // Dynamic: Client Details
    if (
      pathname.startsWith("/admin/clients/") &&
      pathname !== "/admin/clients/add-client"
    ) {
      title = "Client Details";
    }

    // Dynamic: Enquiry Details / Update Enquiry
    if (
      pathname.startsWith("/admin/enquiries/") &&
      pathname !== "/admin/enquiries/new-enquiry"
    ) {
      title = "Enquiry Details";
    }

    // Dynamic: Edit Agent (if you use /admin/edit/:id)
    if (pathname.startsWith("/admin/edit")) {
      title = "Edit Agent";
    }

    document.title = title ? `${title} | ${APP_NAME}` : APP_NAME;
  }, [pathname]);
}
