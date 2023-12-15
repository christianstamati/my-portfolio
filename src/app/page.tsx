export default function Home() {
    return (
        <main className="h-screen overflow-auto">
            <nav className={"flex justify-center bg-red-200 p-14"}>NAVIGATION</nav>
            <div className="grid h-full grid-cols-4 grid-rows-3 gap-6 px-16">
                <div className="col-span-2 row-span-1 flex items-center justify-center rounded-md bg-blue-600">
                    About Card
                </div>
                <div className="col-span-1 row-span-1 flex items-center justify-center rounded-md bg-blue-600">
                    Download resume
                </div>
                <div className="col-span-1 row-span-2 flex items-center justify-center rounded-md bg-blue-600">
                    Project
                </div>
                <div className="col-span-1 row-span-1 flex items-center justify-center rounded-md bg-blue-600">
                    Youtube
                </div>
                <div className="col-span-1 row-span-1 flex items-center justify-center rounded-md bg-blue-600">Map</div>
                <div className="col-span-1 row-span-2 flex items-center justify-center rounded-md bg-blue-600">
                    Project
                </div>
            </div>
        </main>
    );
}
