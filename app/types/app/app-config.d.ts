import type { AppMenuItem } from "~/types/app/layout";

declare module "nuxt/schema" {
  interface AppConfig {
    menu: {
      headerMenu: AppMenuItem[];
      footerMenu: AppMenuItem[];
    };
  }
}

export {};
