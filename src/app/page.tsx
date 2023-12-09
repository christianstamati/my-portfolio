import Navigation from "@/app/navigation";
import ThemeToggle from "@/components/theme-toggle";

export default function Home() {
    return (
        <main className="p-4 pt-2">
            <ThemeToggle />
            <Navigation />
        </main>
    );
}
