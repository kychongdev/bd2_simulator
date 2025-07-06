import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { t } = useTranslation();

  return <h1>{t("Welcome to React")}</h1>;
}
