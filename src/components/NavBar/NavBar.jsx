import { useState } from 'react';
import { HiBars3, HiHeart, HiMiniUser, HiMiniShoppingCart, HiMagnifyingGlass } from "react-icons/hi2";

const NavBar = () => {
    const [isSearchVisible, setIsSearchVisible] = useState(false);

    // Function to toggle visibility of the search input on smaller screens
    const handleSearchToggle = () => setIsSearchVisible(!isSearchVisible);

    // Function to handle the search submission
    const handleSearch = (event) => {
        event.preventDefault();
        const searchText = event.target.elements.search.value;
        console.log("Searching for:", searchText);
        // Implement search logic here
    };

    return (
        <nav className="bg-white shadow-lg" style={{ backgroundColor: '#2D3250', color: 'white', height: '4rem' }}>
            <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-full">
                {/* Left Section: Hamburger Menu and Logo */}
                <div className="flex items-center space-x-6">
                    <button className="focus:outline-none">
                        <HiBars3 className="h-6 w-6 text-white" />
                    </button>
                    <a href="/" className="font-bold text-white">MYRO</a>
                </div>

                {/* Middle Section: Search Input for Larger Screens */}
                <div className="flex-grow">
                    <div className="hidden md:flex justify-center h-full">
                        {isSearchVisible && (
                            <form onSubmit={handleSearch} className="w-full max-w-md relative flex items-center">
                                <input
                                    name="search"
                                    type="search"
                                    className="pl-3 py-1.5 text-sm w-full  focus:outline-none"
                                    placeholder="Search Product"
                                    style={{ backgroundColor: '#424769', color: 'white' }}
                                />
                                <button type="submit" className="ml-2">
                                    <HiMagnifyingGlass className="h-5 w-5 text-white" />
                                </button>
                            </form>
                        )}
                    </div>
                </div>

                {/* Right Section: Icons */}
                <div className="flex items-center space-x-4 h-full">
                    <button className="p-2" onClick={handleSearchToggle}>
                        <HiMagnifyingGlass className="h-6 w-6 text-white" />
                    </button>
                    <a href="/favorites" onClick={() => alert("Heart/Favorites clicked")}> {/* Example link for favorites */}
                        <HiHeart className="h-6 w-6 text-white" />
                    </a>
                    <a href="/profile" onClick={() => alert("Profile clicked")}> {/* Example link for profile */}
                        <HiMiniUser className="h-6 w-6 text-white" />
                    </a>
                    <a href="/cart" onClick={() => alert("Cart clicked")}> {/* Example link for cart */}
                        <HiMiniShoppingCart className="h-6 w-6 text-white" />
                    </a>
                </div>
            </div>
            {/* Conditional Rendering of Search Input for Smaller Screens */}
            {isSearchVisible && (
                <div className="md:hidden w-full px-4 mt-1">
                    <form onSubmit={handleSearch} className="flex">
                        <input
                            autoFocus
                            name="search"
                            type="search"
                            className="pl-3 pr-10 py-2 w-full text-sm focus:outline-none"
                            placeholder="Search Product"
                            style={{ backgroundColor: '#424769', color: 'white' }}
                        />
                        <button type="submit" className="absolute right-3 top-1/2 transform -translate-y-1/2">
                            <HiMagnifyingGlass className="h-5 w-5 text-white" />
                        </button>
                    </form>
                </div>
            )}
        </nav>
    );
};

export default NavBar;
