export default function Home() {
    return (
        <main className="flex h-screen justify-center overflow-auto">
            {/*The grid container*/}
            <div className="grid h-fit grid-cols-4 gap-6 bg-red-500">
                <div className="col-span-2 flex h-[280px] items-center justify-center rounded-xl bg-blue-600">
                    About Card
                </div>
                <div className="flex h-[280px] w-[280px] items-center justify-center rounded-md bg-blue-600">
                    About Card
                </div>
                <div className="flex h-[280px] w-[280px] items-center justify-center rounded-md bg-blue-600">
                    About Card
                </div>
                <div className="flex h-[280px] w-[280px] items-center justify-center rounded-md bg-blue-600">
                    About Card
                </div>
            </div>
        </main>
    );
}
