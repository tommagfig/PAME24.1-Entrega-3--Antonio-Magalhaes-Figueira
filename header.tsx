import React from 'react'

function Header() {
    return (
        <header className="bg-yellow-400 p-4">
            <div className="container mx-auto flex items-center justify-between">
                <div className="flex items-center">
                    <img src="Imagens/image.png" alt="Logo" className="h-10 w-10 mr-4" />
                    <h1 className="text-purple-700 text-xl font-bold">Minha Rede Social</h1>
                </div>
                <div className="flex items-center space-x-4">
                    <input
                        type="text"
                        placeholder="Buscar..."
                        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-700"
                    />
                    <button
                        onClick={() => window.location.href='/login'}
                        className="bg-purple-700 text-white py-2 px-4 rounded hover:bg-purple-800"
                    >
                        Login
                    </button>
                    <button
                        onClick={() => window.location.href='/cadastro'}
                        className="bg-purple-700 text-white py-2 px-4 rounded hover:bg-purple-800"
                    >
                        Cadastro
                    </button>
                    <button
                        onClick={() => window.location.href='/menu'}
                        className="bg-purple-700 text-white py-2 px-4 rounded hover:bg-purple-800"
                    >
                        Menu
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;