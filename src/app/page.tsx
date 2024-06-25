'use client'

import { useChat } from 'ai/react';

export default function Home() {

  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <main className="flex bg-gradient min-h-screen flex-col items-center justify-center">
      <section className="flex flex-col items-center justify-center mb-24">
        <div className="sm:text-5xl md:text-6xl lg:text-7xl text-5xl font-bold bg-clip-text bg-text-gradient">
          <h1>Welcome to</h1>
          <div className="flex items-center justify-center gap-4 pt-2">
            <span>TailwindCss Transform</span>
          </div>
        </div>
      </section>
      <form onSubmit={handleSubmit} className="w-3/4 justify-center items-center flex flex-col">
        <input
          placeholder="Type what you want to get from the code"
          className="pl-5 h-20 w-3/4 rounded-lg text-black shadow-2xl border-2 border-white"
          value={input}
          onChange={handleInputChange} 
        />
        <button className="p-3 mt-5 rounded-lg bg-blue-600 hover:bg-blue-400 transition">
          Get Started
        </button>
      </form>
      {/* <section className="bg-gradient shadow-2xl border-2 bg-transparent border-white w-3/4 h-20 rounded-xl">
      {messages.map(m => (
        <div key={m.id} className="whitespace-pre-wrap">
          {m.role === 'user' ? 'User: ' : 'AI: '}
          {m.content}
        </div>
      ))}
      </section> */}
    </main>
  );
}
