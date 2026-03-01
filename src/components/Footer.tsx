export function Footer() {
    return (
        <footer className="bg-gray-100 dark:bg-gray-800">
            <div className="container mx-auto px-4 py-8 md:py-12">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    <div>
                        <h3 className="text-lg font-bold">AutoLux</h3>
                        <p className="mt-2 text-gray-500 dark:text-gray-400">
                            Your premier destination for luxury and exotic cars.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold">Quick Links</h3>
                        <ul className="mt-2 space-y-2">
                            <li>
                                <a href="/" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="/inventory" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
                                    Inventory
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold">Contact Us</h3>
                        <p className="mt-2 text-gray-500 dark:text-gray-400">
                            123 Luxury Lane, Beverly Hills, CA 90210
                            <br />
                            Email: contact@autolux.com
                            <br />
                            Phone: (123) 456-7890
                        </p>
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-200 pt-8 text-center text-gray-500 dark:border-gray-700 dark:text-gray-400">
                    &copy; {new Date().getFullYear()} AutoLux. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
