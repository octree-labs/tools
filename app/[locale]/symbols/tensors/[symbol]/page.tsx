import { symbolPageRoute } from "@/lib/symbol-pages/route";

const route = symbolPageRoute("tensors");

export const dynamicParams = true;
export const generateStaticParams = route.generateStaticParams;
export const generateMetadata = route.generateMetadata;
export default route.Page;
