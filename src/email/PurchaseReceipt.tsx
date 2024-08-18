import { Body, Head, Html, Preview, Tailwind } from "@react-email/components";

export default function PurchaseReceiptEmail( {product}) {
    return (
        <Html>
            <Preview>Download {product.name} and view receipt</Preview>
            <Tailwind>
                <Head />
                <Body className="font-sant bg-white">
                    
                </Body>
            </Tailwind>
        </Html>
    )
}