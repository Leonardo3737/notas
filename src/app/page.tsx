
import { Amatic_SC } from "next/font/google";

const amatic_SC = Amatic_SC({ weight: '400', subsets: ['latin'] })

export default function Home() {
  return (
    <main className='h-screen w-screen flex flex-col justify-center items-center'>

      {/* <NavBar screen={'about'} /> */}
      <div className='w-1/4 h-1/4 flex flex-col justify-between align-center text-center rounded-lg'>
        <h2>Oque é o My Anotations?</h2>
        <div className={`mb12 text-start rounded-lg ${amatic_SC.className}`} style={{ backgroundColor: 'rgb(255, 235, 198)' }}>
          <p>É uma plataforma onde você pode escrever</p>
          <p>anotações e armazenar na nuvem.</p>
        </div>
        <div className='text-start text-xs my-5'>
          <p>Criado e desenvolvido por: Leonardo Vinicius Silva Batista</p>
        </div>
      </div>
    </main>
  );
}
