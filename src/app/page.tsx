'use client'

import { useChat } from 'ai/react';

export default function Home() {

  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch text-black">
      {messages.map(m => (
        <div key={m.id} className="whitespace-pre-wrap">
          {m.role === 'user' ? 'User: ' : 'AI: '}
          {m.content}
        </div>
      ))}

      <form onSubmit={handleSubmit}>
        <input
          className="fixed bottom-0 w-full max-w-md p-2 mb-8 border border-gray-300 rounded shadow-xl"
          value={input}
          placeholder="Say something..."
          onChange={handleInputChange}
        />
      </form>
    </div>

    // <main className="flex bg-gradient min-h-screen flex-col items-center justify-center">
    //   <section className="flex flex-col items-center justify-center mb-24">
    //     <div className="sm:text-5xl md:text-6xl lg:text-7xl text-5xl font-bold bg-clip-text bg-text-gradient">
    //       <h1>Welcome to</h1>
    //       <div className="flex items-center justify-center gap-4 pt-2">
    //         <span>TailwindCss Transform</span>
    //       </div>
    //     </div>
    //   </section>
    //   <section className="w-3/4 justify-center items-center flex flex-col">
    //     <input
    //       type="text"
    //       placeholder="Type what you want to get from the code"
    //       className="h-20 w-3/4 rounded-lg text-black "
    //     />
    //     <button className="p-3 mt-5 rounded-lg bg-blue-600 hover:bg-blue-400 transition">
    //       Get Started
    //     </button>
    //   </section>
    //   <section className="bg-gradient shadow-2xl border-2 bg-transparent border-white w-3/4 h-20 rounded-xl"></section>
    // </main>
  );
}
