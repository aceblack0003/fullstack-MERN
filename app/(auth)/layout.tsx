import { ClerkProvider } from "@clerk/nextjs"

export const metadata = {
    title: 'Thread',
    description: 'A next.js 13 meta threads application'
}
export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body>{children}</body>
            </html>
        </ClerkProvider>
    )
}