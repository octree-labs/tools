import { symbolPageRoute } from "@/lib/symbol-pages/route";

const route = symbolPageRoute("linear-algebra");

export const dynamicParams = true;
export const generateStaticParams = route.generateStaticParams;
export const generateMetadata = route.generateMetadata;
export default route.Page;
