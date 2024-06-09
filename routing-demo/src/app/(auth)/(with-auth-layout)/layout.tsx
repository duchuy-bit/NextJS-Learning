export default function Layout({children}: {children: React.ReactNode}) {
    return (
        <section>
            {children}
            <h2>Inner Layout</h2>
        </section>
    );
}