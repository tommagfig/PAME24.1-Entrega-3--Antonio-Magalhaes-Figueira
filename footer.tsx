import React from 'react';

function Footer() {
    return (
        <footer className="bg-yellow-400 p-4 mt-4">
            <div className="container mx-auto flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
                <div className="flex items-center">
                    <img src="/path/to/logo.png" alt="Logo" className="h-10 w-10 mr-4" />
                    <span className="text-purple-700 text-xl font-bold">WaveConnect</span>
                </div>
                <div className="text-purple-700 text-center">
                    <p>&copy; 2024 WaveConnect. Todos os direitos reservados.</p>
                </div>
                <div className="flex space-x-4">
                    <a href="/termos" className="text-purple-700 hover:underline">Termos de Serviço</a>
                    <a href="/privacidade" className="text-purple-700 hover:underline">Política de Privacidade</a>
                    <a href="/contato" className="text-purple-700 hover:underline">Contato</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;