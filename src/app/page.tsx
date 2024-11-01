import Image from "next/image";

import arrowDown from "../../public/assets/arrow-down.svg";

import bgUptimeBoy from "../../public/assets/up-boy-vector.png";
import whyUptime from "../../public/assets/why-uptime.png";
import mockCellNotebook from "../../public/assets/mock-celular-notebook.png";
import uptimeHeadphone from "../../public/assets/uptime-headphone.png";
import uptimeKitAvr from "../../public/assets/mock-uptime-kitavr.png";


import stepsUptime from "../../public/assets/steps-uptime.png";
import logoHeader from "../../public/assets/logo-header.png";
import logoUpOnline from "../../public/assets/logo-uponline.png";
import logoEonUptime from "../../public/assets/logo-eon-uptime.png";
import logoAvrEonXr from "../../public/assets/logos-avr-eonxr.png";

import cardUnit1 from "../../public/assets/card-unit-1.png";
import cardUnit6 from "../../public/assets/card-unit-6.png";
import cardUnit9 from "../../public/assets/card-unit-9.png";
import cardUnit15 from "../../public/assets/card-unit-15.png";
import cardUnit20 from "../../public/assets/card-unit-20.png";

import VideoPlayerSectionTwo from "@/components/video-player-section-two";
import VideoPlayerSectionOne from "@/components/video-player-section-one";

import lessonsGroup from "../../public/assets/lessons-group.png"
import { Player } from "@/components/player";

interface UptimeMethods {
  search: string;
  uponline: string;
  apps: string;
  conventionalSchools: string;
}

const uptimeMethods: UptimeMethods[] = [
  {
    search: '1. Metodologia de Resultado',
    uponline: 'SIM',
    apps: 'NÃO',
    conventionalSchools: 'NÃO',
  },
  {
    search: '2. Inglês por Neurolinguística e Mnemónica',
    uponline: 'SIM',
    apps: 'NÃO',
    conventionalSchools: 'NÃO',
  },
  {
    search: '3. Professores 100% NATIVOS',
    uponline: 'SIM',
    apps: 'SIM',
    conventionalSchools: 'SIM',
  },
  {
    search: '4. Mutliplataforma - COMPUTADOR, TABLET E SMARTPHONE',
    uponline: 'SIM',
    apps: 'SIM',
    conventionalSchools: 'SIM',
  },
  {
    search: '5. Plataforma de REALIDADE VIRTUAL E AUMENTADA',
    uponline: 'SIM',
    apps: 'NÃO',
    conventionalSchools: 'NÃO',
  },
  {
    search: '6. Tempo de Curso - DEFINIDO',
    uponline: 'SIM - 18 meses',
    apps: 'NÃO',
    conventionalSchools: 'NÃO',
  },
  {
    search: '7. Valor Completo do Curso',
    uponline: 'SIM - BOLSA',
    apps: 'NÃO',
    conventionalSchools: 'NÃO',
  },
  {
    search: '8. Plano de Estudo - DEFINIDO e INDIVIDUAL',
    uponline: 'SIM',
    apps: 'NÃO',
    conventionalSchools: 'NÃO',
  },
  {
    search: '9. Material Complementar | E-BOOKS | PDF',
    uponline: 'SIM',
    apps: 'SIM',
    conventionalSchools: 'SIM',
  },
  {
    search: '10. Video-Aulas IMERSIVAS',
    uponline: 'SIM',
    apps: 'NÃO',
    conventionalSchools: 'NÃO',
  },
  {
    search: '11. 100% CONVERSAÇÃO',
    uponline: 'SIM',
    apps: 'NÃO',
    conventionalSchools: 'NÃO',
  },
  {
    search: '12. Curso de Inglês COMPLETO | FALAR, LER, ESCREVER, OUVIR',
    uponline: 'SIM',
    apps: 'NÃO',
    conventionalSchools: 'SIM - 05/07 ANOS',
  },
  {
    search: '13. Certificação - FLUÊNCIA B1/B2',
    uponline: 'SIM',
    apps: 'NÃO',
    conventionalSchools: 'SIM',
  },
  {
    search: '14. KIT Exclusivo - AVR+ UPTIME',
    uponline: 'SIM',
    apps: 'NÃO',
    conventionalSchools: 'NÃO',
  },
  {
    search: '15. INÍCIO EM QUALQUER DIA DO ANO',
    uponline: 'SIM',
    apps: 'SIM',
    conventionalSchools: 'NÃO',
  },
  {
    search: '16. Do ZERO à Fluência - Não sabe NADA de Inglês',
    uponline: 'SIM',
    apps: 'NÃO',
    conventionalSchools: 'SIM - 05/07 ANOS',
  },
]

const TableColumnDivider = () => {
  return (
    <div className="flex flex-col gap-0 items-center absolute top-[3rem] lg:top-[4rem] xl:top-[5rem] right-0">
      <span className="w-2 h-2 rounded-full bg-white"></span>
      <span className="bg-white h-[52rem] lg:h-[47rem] xl:h-[40rem] w-[2px]"></span>
      <span className="w-2 h-2 rounded-full bg-white"></span>
    </div>
  )
}

export default function Home() {
  return (
    <div className="w-screen ">
      <section className="h-screen bg-up-online-bg-planet-one bg-no-repeat bg-cover">
        <header className="p-4 flex items-center justify-center bg-[#1C1B2B] z-20">
          <Image
            className=""
            src={logoHeader} alt="Imagens representando a logomarca da empresa UP Time."
          />
        </header>
        <div className="relative overflow-clip">
          <div className="uptime-ellipse-blue absolute -top-40 -left-44 z-0" />
          <div className="uptime-ellipse-blue absolute -top-10 right-0 z-0 hidden lg:block" />
          <div className="uptime-ellipse-blue absolute -top-10 right-[16rem] z-0 hidden lg:block" />

          <div className="flex-col items-end pt-24 md:pt-32 px-8 text-center md:text-right">
            <span className="flex flex-col text-white font-bold text-xl md:text-4xl lg:text-5xl 2xl:text-5xl 3xl:text-6xl">
              <p>Apenas 5% dos brasileiros</p>
              <p>sabem se comunicar em inglês</p>
            </span>
            <span className="flex flex-col text-white font-bold text-xs md:text-xl lg:text-2xl 3xl:text-2xl mt-12 md:mt-20">
              <p>Sabemos o porquê de 95% dos brasileiros</p>
              <p>não falarem Inglês. Você sabe?</p>
            </span>
            <span className="flex flex-col mt-8 text-sm md:text-xl lg:text-2xl 2xl:text-2xl 3xl:text-3xl text-white font-bold">
              <p>Somos a ÚNICA ESCOLA FOCADA EM QUEM</p>
              <p>NÃO SABE NADA OU QUASE NADA DE INGLÊS,</p>
              <p>tornando nossos alunos fluentes de forma acelerada!</p>
              <p className="mt-8">Do ZERO à FLUÊNCIA B1/B2*</p>
            </span>

            <span className="flex flex-col mt-10 text-base md:text-2xl lg:text-3xl 2xl:text-3xl 3xl:text-4xl text-[#FFED00] font-bold">
              <p>+600 MIL alunos,</p>
              <p>TRANSFORMARAM SUAS VIDAS</p>
              <p>aprendendo Inglês na UPTIME!</p>
            </span>
          </div>
        </div>
      </section>

      <section className="flex flex-col relative overflow-clip bg-[#05040F] h-screen">
        <Image src={bgUptimeBoy} alt="" className="absolute top-0 right-0 h-screen -z-5 opacity-40 lg:opacity-100" />
        <div className="uptime-ellipse-blue absolute -top-32 left-48 " />
        <div className="uptime-ellipse-blue absolute -top-32 -left-48 " />
        <div className="uptime-ellipse-red absolute -bottom-40 -left-60 " />
        <div className="uptime-ellipse-red absolute -bottom-40 -left-60 " />
        <div className="uptime-ellipse-red absolute bottom-[38rem] -right-40 hidden md:block" />
        <div className="uptime-ellipse-red absolute bottom-[20rem] -right-40 hidden md:block" />
        <div className="uptime-ellipse-red absolute bottom-10 -right-40 z-20 hidden md:block" />

        <div className="flex z-10 flex-col px-4 lg:pl-8 xl:pl-32 h-full justify-center">

          <div className="flex flex-col md:max-w-[70%] lg:max-w-[40%]">
            <p className="text-4xl lg:text-3xl 2xl:text-6xl font-bold text-[#009CEE]">THE ONE <span className="text-3xl">&</span> ONLY</p>
            <p className="mt-4 text-[#009CEE] text-lg lg:text-sm font-bold">Curso de Inglês COMPLETO 100% Online (EAD - Digital) com AVR - REALIDADE VIRTUAL E AUMENTADA</p>
          </div>

          <div className="flex flex-col md:max-w-[70%] text-white gap-6 font-extralight mt-12 text-sm md:text-lg">
            <span>
              <p><b>A UPTIME</b> é a 1ª escola do mundo a utilizar a</p>
              <p><b> AVR - Realidade Virtual e Aumentada para ensinar Inglês.</b></p>
            </span>

            <span className="">
              <p>Através de uma parceria <b>GLOBAL</b> com a <b>EON REALITY INC</b>.,</p>
              <p>líder mundial em <b>AVR</b>, o <b>ALUNO UPTIME</b> tem a</p>
              <p>garantia de ter, em mãos, <b>TECNOLOGIA MUNDIAL</b> de ponta.</p>
            </span>

            <span>
              <p>Com o <b>AVR+ UPTIME</b> todo o conteúdo do metódo <b>UPTIME</b></p>
              <p>foi recriado para ambientes virtuais. Isso permite ao aluno</p>
              <p>ter uma experiência <b>INOVADORA</b> e <b>EXCLUSIVA</b> em</p>
              <p><b>Realidade Virtual e Aumentada - AVR</b>.</p>
              <p>Esse recurso acelera o aprendizado e trás uma imersão completa!</p>
            </span>
          </div>

          <div className="flex flex-row gap-2 mt-12 md:w-[70%]">
            <Image priority src={logoAvrEonXr} alt="Logo parceiros" />
            <Image priority src={logoEonUptime} alt="Logo parceiros" />
          </div>
        </div>
      </section>

      <section className=" bg-[#0f0e22] opacity-95 gap-10 flex flex-col py-4 relative overflow-clip">
        <div className="uptime-ellipse-blue absolute top-[15%] left-[10%]" />
        <div className="uptime-ellipse-blue absolute top-[15%] left-[10%]" />
        <div className="flex flex-col gap-16 mt-8 items-center z-10">
          <p className="z-10 bg-gradient-to-l from-custom-blue to-custom-green bg-clip-text text-transparent text-5xl md:text-7xl font-semibold font-jakartaSans"><span className="text-white">THE</span> UPOnline</p>

          <Image src={lessonsGroup} alt="" layout="responsive" className="px-[10%] " />
          {/* <div className="flex flex-row text-white opacity-85 gap-8 font-bold text-base lg:text-3xl">
            <div className="flex gap-4">
              <p>20</p>
              <p>UNIDADES</p>
            </div>
            <Image src={arrowRight} alt="Seta apontando para direita" />
            <div className="flex gap-4">
              <p>80</p>
              <p>LIÇÕES</p>
            </div>
            <Image src={arrowRight} alt="Seta apontando para direita" />
            <div className="flex gap-4">
              <p>560</p>
              <p>ATIVIDADES</p>
            </div>
          </div> */}
        </div>

        <div className="flex flex-col gap-6 text-white items-center text-sm lg:text-base text-center z-10">
          <p>O curso é estruturado em VÍDEOS, E-BOOKS e conteúdos em REALIDADE VIRTUAL E AUMENTADA!</p>
          <p>Em cada unidade, você terá acesso a vídeos estratégicos focados em COMPREENSÃO AUDITIVA, FALA e VOCABULÁRIO.</p>
          <p>Avaliações ao longo do curso garantem real aprendizado, permitindo a absorção e aplicação de todo o conteúdo.</p>
          <p>Nossa metodologia acelera o aprendizado e leva você à fluência com confiança!</p>

          <div className="flex flex-col items-center">
            <p>DO ZERO, com inglês prático para situações reais, por meio de PRÁTICA ONLINE DIÁRIA.</p>
            <p>Alcance o nível B1/B2** conforme o Quadro Europeu Comum de Referência para Línguas, em 80 INCRÍVEIS SEMANAS!</p>
          </div>
        </div>

        <div className="flex flex-col text-white pl-[5%] text-xs">
          <p className="italic font-normal">*De acordo com o nível de desenvolvimento e prática do aluno.</p>
          <p className="italic font-normal">**Conforme o Quadro Europeu Comum de Referência para Línguas.</p>
        </div>
      </section>


      <section className="bg-[#090814] opacity-95 justify-evenly flex flex-row py-8 items-center relative overflow-clip z-10">
        <div className="uptime-ellipse-blue absolute bottom-10 -right-[20rem] md:-right-[15rem] -z-10" />
        <Image src={cardUnit9} alt="" className="w-[10%]" />
        <Image src={cardUnit6} alt="" className="w-[15%]" />
        <Image src={cardUnit1} alt="" className="w-[20%]" />
        <Image src={cardUnit15} alt="" className="w-[15%]" />
        <Image src={cardUnit20} alt="" className="w-[10%]" />
        <div className="uptime-ellipse-blue absolute -bottom-32 -left-[20rem] -z-20" />
        <div className="uptime-ellipse-blue absolute -bottom-32 -left-[20rem] -z-20" />
      </section>


      <section className="bg-[#0f0e22] opacity-95 md:flex md:flex-col py-8 md:items-center relative overflow-clip hidden">
        <div className="uptime-ellipse-blue absolute top-60 right-72 -z-20" />
        <div className="uptime-ellipse-blue absolute top-60 right-72 -z-20" />
        <div className="w-full flex justify-center my-10 mb-14">
          <Image src={whyUptime} alt="" className="w-[30%]" />
        </div>

        <table className="table-auto border-collapse w-full">

          <thead>
            <tr className="text-white">
              <th className="px-4 relative">
                <div className="w-full flex items-center justify-center">
                  <div className="h-12 lg:h-16 xl:h-20 px-4 flex self-center items-center justify-center gap-2 bg-[#0A0A16] rounded-full">
                    <span className="font-bold md:text-xs lg:text-lg xl:text-2xl">QUEM QUER FLUÊNCIA, PROCURA</span>
                    <Image src={arrowDown} alt="" className="w-4" />
                  </div>
                </div>
                <TableColumnDivider />
              </th>
              <th className="w-40 relative">
                <div className="flex items-center justify-center">
                  <Image src={logoUpOnline} alt="" className="" />
                </div>
                <TableColumnDivider />
              </th>
              <th className="w-40 relative">
                <div className="flex items-center justify-center">
                  <div className="h-12 lg:h-16 xl:h-20 w-3/4 flex items-center justify-center bg-[#0A0A16] rounded-full">
                    <span className="font-bold md:text-xs lg:text-lg xl:text-2xl">Aplicativos</span>
                  </div>
                </div>
                <TableColumnDivider />
              </th>
              <th className="w-40">
                <div className="flex items-center justify-center">
                  <div className="h-12 lg:h-16 xl:h-20 w-3/4 flex items-center justify-center bg-[#0A0A16] rounded-full">
                    <span className="font-bold md:text-xs lg:text-lg xl:text-2xl w-40">Escolas Convencionais</span>
                  </div>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {uptimeMethods.map((item, rowIndex) => (
              <tr
                key={rowIndex}
                className={`${rowIndex % 2 === 0 ? 'bg-black' : 'bg-transparent'} text-white`}
              >
                <td className="w-[40%] px-4 py-2">
                  {item.search}
                </td>
                <td className="w-40 px-4 py-2 text-center">
                  {item.uponline}
                </td>
                <td className="w-40 px-4 py-2 text-center">
                  {item.apps}
                </td>
                <td className="w-40 px-4 py-2 text-center">
                  {item.conventionalSchools}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="uptime-ellipse-blue absolute top-1/4 -z-20 left-[26rem]" />
        <div className="uptime-ellipse-blue absolute top-1/4 -z-20 left-[26rem]" />

        <div className="px-16 rounded-full mt-32">
          <span className="text-4xl text-white flex justify-center">
            <span className="w-3/4 lg:w-[60%] text-center">VEJA O QUE VOCÊ PODE ESTAR <b className="bg-custom-text-gradient bg-clip-text text-transparent"> PERDENDO...</b></span>
          </span>
        </div>

        <div className="flex gap-4 items-center relative">
          <VideoPlayerSectionOne />
        </div>

        <span className="text-white font-bold text-2xl lg:text-4xl mt-8 mb-12">Os alunos UPTIME tem acesso a um ensino <b className="bg-custom-text-gradient bg-clip-text text-transparent">ÚNICO!</b></span>
      </section>

      <section className="bg-black flex flex-col py-16 items-center relative overflow-clip">
        <div className="uptime-ellipse-red absolute top-0 -left-[15rem] lg:top-32 lg:-left-40" />
        <div className="uptime-ellipse-red absolute  top-0 -left-[15rem] lg:top-32 lg:-left-40" />
        <div className="uptime-ellipse-red absolute bottom-32 -right-40" />
        <div className="uptime-ellipse-red absolute bottom-32 -right-40" />
        <div className="w-full px-10 lg:px-16">
          <span className="bg-[#5C0000] py-4 px-12 rounded-full text-white font-medium text-xl xl:text-3xl">Como funciona?</span>
          <Image src={stepsUptime} alt="" className="mt-12" layout="responsive" />
        </div>
      </section>

      <section className="bg-[#0f0e22] opacity-95 flex py-10 items-center justify-evenly relative overflow-clip">
        <div className="uptime-ellipse-blue absolute -bottom-20 -left-20 z-20" />
        <div className="uptime-ellipse-blue absolute -top-20 -right-20 z-20" />
        <Image src={mockCellNotebook} alt="" className="w-[40%] lg:w-[35%]" />
        <div className="flex flex-col items-start justify-center gap-8">
          <span className="bg-[#5C0000] w-full py-4 lg:px-20 lg:py-6 rounded-full text-center text-white font-medium text-xl lg:text-4xl">Multiplataforma</span>
          <span className="text-white font-semibold text-xl lg:text-4xl flex flex-col">
            <span>Acesse a plataforma através</span>

            <span>de <span className="bg-custom-text-gradient-second bg-clip-text text-transparent">qualquer dispositivo!</span></span>
          </span>
        </div>
      </section>

      <section className="bg-black flex py-14 2xl:py-16 items-center justify-evenly relative overflow-clip">
        <div className="uptime-ellipse-red absolute -top-10 -left-[21rem] lg:-left-[14rem] 2xl:-left-10 z-20" />
        <div className="uptime-ellipse-red absolute -top-10  -left-[21rem] lg:-left-[14rem] 2xl:hidden 2xl:-left-10 z-20" />
        <div className="uptime-ellipse-red absolute -bottom-10 -right-10 z-20" />
        <div className="flex flex-col gap-6 2xl:gap-10 z-20">
          <div className="w-full">
            <span className="bg-[#5C0000] py-4 px-12 2xl:py-6 2xl:px-16 rounded-full text-white font-medium 2xl:text-3xl">Materiais Complementares</span>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-white font-semibold text-xl 2xl:text-3xl">
              Materiais para <span className="bg-custom-text-gradient-second bg-clip-text text-transparent">download!</span>
            </span>
            <ul className="list-disc list-inside text-white font-light text-sm 2xl:text-lg">
              <li>Exercícios extras</li>
              <li>Áudios dos conteúdos dos capítulos</li>
              <li>Resumos em PDF</li>
              <li>E-Books</li>
              <li>Aulas complementares AO VIVO/Sábados</li>
            </ul>
          </div>
        </div>

        <Image src={uptimeHeadphone} alt="" className="w-[20%] lg:w-[15%] xl:w-[10%] 2xl:w-[8%] z-20" />
      </section>

      <section className="bg-[#0f0e22] flex py-16 pb-12 items-center justify-evenly relative overflow-clip">
        <div className="uptime-ellipse-blue absolute top-20 -left-40" />
        <div className="uptime-ellipse-blue absolute top-5 left-[33%] " />
        <div className="uptime-ellipse-blue absolute -top-20 -right-20 " />
        <div className="uptime-ellipse-blue absolute -top-20 -right-20 " />
        <Image src={uptimeKitAvr} alt="" className="w-[40%] z-20" />

        <div className="flex flex-col gap-6 z-10">
          <div className="flex items-center">
            <span className="bg-[#5C0000] py-2 px-10 lg:py-6 lg:px-16 rounded-full text-white font-medium lg:text-3xl">
              UPOnline AVR+ Kit
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-white font-semibold lg:text-3xl lg:w-[23rem]">Kit de boas-vindas, </span>
            <span className="text-white font-semibold lg:text-3xl lg:w-[32rem]"><span className="bg-custom-text-gradient bg-clip-text text-transparent">um presente </span> para você desfrutar!</span>
          </div>
        </div>
      </section>

      <section className="bg-[#0f0e22] opacity-95 relative overflow-x-clip">
        <div className="hidden lg:block uptime-ellipse-red absolute top-[15rem] -left-10 -z-10" />
        <div className="hidden lg:block uptime-ellipse-red absolute top-[15rem] -left-10 -z-10" />
        <div className="hidden lg:block uptime-ellipse-red absolute top-[30rem] -left-10 -z-10" />
        <div className="hidden lg:block uptime-ellipse-red absolute top-[30rem] -left-10 -z-10" />
        <div className="hidden lg:block uptime-ellipse-red absolute top-[45rem] -left-10 -z-10" />
        <div className="hidden lg:block uptime-ellipse-red absolute top-[45rem] -left-10 -z-10" />

        <div className="hidden lg:block uptime-ellipse-blue absolute top-[15rem] -right-10 -z-10" />
        <div className="hidden lg:block uptime-ellipse-blue absolute top-[15rem] -right-10 -z-10" />
        <div className="hidden lg:block uptime-ellipse-blue absolute top-[30rem] -right-10 -z-10" />
        <div className="hidden lg:block uptime-ellipse-blue absolute top-[30rem] -right-10 -z-10" />
        <div className="hidden lg:block uptime-ellipse-blue absolute top-[45rem] -right-10 -z-10" />
        <div className="hidden lg:block uptime-ellipse-blue absolute top-[45rem] -right-10 -z-10" />

        <div className="h-6 w-full bg-black"></div>

        <div className="flex flex-col text-4xl lg:text-5xl w-full text-center mt-10">
          <span className="text-white font-medium">O AMANHÃ DA EDUCAÇÃO</span>
          <span className="text-white font-medium"><span className="bg-custom-text-gradient-second bg-clip-text text-transparent">EM SUAS MÃOS</span> HOJE!</span>
        </div>

        <div className="w-full flex items-center justify-center mt-16">

          <div className="w-[60%] lg:w-[45rem] xl:w-[60rem]">
            <Player
              videoUrl={'https://firebasestorage.googleapis.com/v0/b/uptime-videos.appspot.com/o/section-learning-VR%2FshortClips8.mp4?alt=media&token=80bdf495-a499-4a1f-91a3-612fccadebb3'}
            />
          </div>
        </div>

        <div className="flex gap-3 mt-8 w-full items-center justify-center">
          <Image src={logoAvrEonXr} alt="" />
          <Image src={logoEonUptime} alt="" />
        </div>

        <div className="flex w-full items-center justify-center mt-16">
          <span className="text-white font-semibold text-4xl lg:text-6xl">Imersão <span className="bg-custom-text-gradient-second bg-clip-text text-transparent">total</span> no idioma!</span>
        </div>

        <div className="w-full mt-20 px-20 flex relative overflow-x-clip gap-16">
          <div className="uptime-ellipse-red absolute top-40 -right-10 -z-10" />
          <div className="uptime-ellipse-red absolute top-40 -right-10 -z-10" />
          <div className="flex flex-col gap-4 w-[50%]">
            <span className="text-white font-bold xl:text-2xl lg:text-xl">Aprendizado imersivo e interativo</span>
            <p className="text-white font-light text-xs-10 lg:text-base xl:text-2xl">
              A RV pode simular ambientes em que o aluno se sente completamente imerso no idioma que está aprendendo. Por exemplo, ele pode {`"visitar"`} um país estrangeiro, interagir com personagens nativos e realizar tarefas cotidianas em um ambiente virtual. Essa imersão ajuda a melhorar a compreensão auditiva e oral de forma natural, semelhante à experiência de um intercâmbio cultural.
            </p>
          </div>

          <div className="w-[50%] ">
            <Player
              videoUrl={'https://firebasestorage.googleapis.com/v0/b/uptime-videos.appspot.com/o/section-learning-VR%2FCreatorAVR_shortclip5.mp4?alt=media&token=0746265a-76f9-4426-8491-07d56844233f'}
            />
          </div>
        </div>

        <div className="w-full mt-20 px-20 flex relative overflow-x-clip gap-16">
          <div className="uptime-ellipse-blue absolute -bottom-10 -left-10 -z-10" />
          <div className="uptime-ellipse-blue absolute -bottom-10 -left-10 -z-10" />
          <div className="w-[50%]">
            <Player
              videoUrl={'https://firebasestorage.googleapis.com/v0/b/uptime-videos.appspot.com/o/section-learning-VR%2FEON-XR.mp4?alt=media&token=d87a2760-e5f0-4956-9c68-0bd59154f9ea'}
            />
          </div>

          <div className="flex flex-col gap-4 w-[50%]">
            <span className="text-white font-bold xl:text-2xl lg:text-xl">Prática em Tempo Real, Multissensorial</span>
            <p className="text-white font-light text-xs-10 lg:text-base xl:text-2xl">
              As tecnologias de Realidade Aumentada (RA) e Realidade Virtual (RV) incentivam a participação ativa e interativa dos alunos. A RA permite a prática contínua do idioma no cotidiano, sobrepondo palavras e frases em objetos do dia a dia, enquanto a RV envolve o aluno em desafios e missões que exigem o uso do idioma. Ambas promovem uma aprendizagem prática, contextualizada e imersiva, facilitando o desenvolvimento do vocabulário e da gramática.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex w-full flex-col gap-2 text-white text-lg lg:text-2xl xl:text-4xl font-semibold mt-24 items-center">
            <span><span className="bg-custom-text-gradient bg-clip-text text-transparent">O 2 BILHÕES DE PESSOAS</span> no mundo inteiro estão aprendendo uma nova</span>
            <span>língua neste instante. <span className="bg-custom-text-gradient bg-clip-text text-transparent">DESTAS, 80% ESTÃO APRENDENDO O INGLÊS!</span></span>
          </div>

          <div className="h-[7rem] lg:h-[12rem] xl:h-[14rem] mt-4 relative w-full flex justify-center">
            <div className="absolute -bottom-5 lg:-bottom-8 flex justify-center gap-4 items-end">
              <span className="w-[8rem] lg:w-[12rem] xl:w-[14rem] lg:text-3xl text-xs py-4 px-4 rounded-lg bg-black opacity-85 font-normal ">
                <span className="text-[#F9E814] flex gap-2 items-center">
                  <span className="text-xl lg:text-2xl xl:text-4xl">95%</span>
                </span>
                <p className="text-white text-xs-10 lg:text-sm xl:text-lg leading-3">
                  Estima-se que esse é o percentual de brasileiros com péssimo ou nenhum conhecimento do idioma.
                </p>
              </span>
              <span className="w-[10rem] lg:w-[16rem] xl:w-[24rem] lg:text-3xl text-xs py-4 px-4 rounded-lg bg-black opacity-85 font-normal ">
                <span className="text-[#F9E814] flex gap-2 items-center">
                  <span className="text-2xl lg:text-4xl xl:text-4xl">#70</span>
                  <span className="text-xs-10 lg:text-base xl:text-lg w-[40%]">Baixa proeficiência</span>
                </span>
                <p className="text-white text-xs-10 mt-1 lg:text-sm xl:text-lg leading-3">
                  Essa é a posição do Brasil no ranking de proficiência em Inglês entre 130 países. Em 5 anos o Brasil caiu 16 posições.
                </p>
              </span>

              <span className="w-[10rem] lg:w-[14rem] xl:w-[20rem] lg:text-3xl text-xs py-4 px-4 rounded-lg bg-black opacity-85 font-normal ">
                <span className="text-[#F9E814] flex gap-2 items-center">
                  <span className="text-xl lg:text-2xl xl:text-4xl">5%</span>
                </span>
                <p className="text-white text-xs-10 lg:text-sm xl:text-lg leading-3">
                  É o percentual de brasileiros que tem um bom conhecimento do idioma.
                </p>
              </span>

              <span className="w-[8rem] lg:w-[14rem] xl:w-[18rem] lg:text-3xl text-xs py-2 px-4 rounded-lg bg-black opacity-85 font-normal ">
                <span className="text-[#F9E814] flex gap-2 items-center">
                  <span className="text-xl lg:text-2xl xl:text-4xl">1 a 2%</span>
                </span>
                <p className="text-white text-xs-10 lg:text-sm xl:text-lg leading-3">
                  Dos brasileiros é realmente fluente na língua inglesa!
                </p>
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#D9D9D9] relative -z-10 overflow-x-clip">
        <div className="uptime-ellipse-blue absolute top-20 -left-10 -z-10" />
        <div className="uptime-ellipse-blue absolute top-20 -left-10 -z-10" />
        <div className="uptime-ellipse-orange absolute top-[15rem] right-[20%] -z-10" />
        <div className="uptime-ellipse-orange absolute top-[18rem] right-[20%] -z-10" />
        <div className="uptime-ellipse-orange absolute top-[20rem] right-[20%] -z-10" />

        <div className="uptime-ellipse-orange absolute top-[54rem] right-0 -z-10" />
        <div className="uptime-ellipse-orange absolute top-[54rem] right-0 -z-10" />
        <div className="uptime-ellipse-orange absolute top-[54rem] right-0 -z-10" />

        <div className="uptime-ellipse-blue absolute bottom-20 left-10 -z-10" />
        <div className="uptime-ellipse-blue absolute bottom-20 left-10 -z-10" />

        <div className="flex flex-col gap-6">
          <div className="flex w-full flex-col gap-2 px-16 font-semibold mt-16 items-center">
            <span className="text-black text-4xl lg:text-5xl">O QUE NINGUÉM TE CONTA SOBRE</span>
            <span className="bg-custom-text-gradient bg-clip-text text-transparent text-3xl lg:text-4xl">O APRENDIZADO DE INGLÊS NO BRASIL!</span>
            <span className="text-black font-bold text-3xl mt-4">Prepare-se para a verdade<span className="bg-custom-text-gradient bg-clip-text text-transparent"> NUA E CRUA!</span></span>
          </div>

          <div className="flex gap-4 items-center w-full">
            <VideoPlayerSectionTwo />
          </div>

          <div className="mb-16 mt-12 flex flex-col w-full items-center justify-center">
            <span className="bg-custom-text-gradient bg-clip-text text-transparent text-6xl font-bold py-2">Sérgio Monteiro</span>
            <span className="text-black font-bold text-3xl py-2">Chairman UPTIME GROUP</span>
          </div>
        </div>
      </section>

      <section className="bg-[#0f0e22] opacity-95 pt-20 pb-8 relative">
        <div className="uptime-ellipse-blue absolute -top-20 -left-20 -z-20" />
        <div className="uptime-ellipse-blue absolute bottom-[40rem] right-0 -z-20" />
        <div className="w-full flex justify-around">
          <div className="relative flex w-[15rem]">
            <span className="font-stickSans text-8xl text-white opacity-10">FAQ</span>
            <span className="flex flex-col absolute left-0 top-7">
              <span className="text-white font-bold text-2xl">DÚVIDAS?</span>
              <span className="bg-custom-text-gradient bg-clip-text text-transparent leading-5 font-semibold text-xl">Perguntas Frequentes</span>
            </span>
          </div>

          <div className="flex flex-col gap-4 font-jakartaSans font-semibold max-w-[50%]">
            <div className="flex flex-col">
              <span className="text-[#1BAEA8] text-base xl:text-2xl">Pra quem é o curso?</span>
              <div className="h-1 w-full bg-custom-gradient-line-break rounded-full blur-xs mt-1"></div>
              <span className="text-white mt-4 xl:leading-6 xl:w-[50rem] text-sm xl:text-lg">O UPOnline foi desenvolvido para atender o anseio de 95% dos Brasileiros! Pensando naqueles que sabem nada ou quase nada do idioma Inglês. Para quem quer sair do Zero à Fluência rapidamente.</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[#1BAEA8] text-base xl:text-2xl">Qual a idade mínima para estudar no UPOnline?</span>
              <div className="h-1 w-full bg-custom-gradient-line-break rounded-full blur-xs mt-1"></div>
              <span className="text-white mt-4 xl:leading-6 xl:w-[50rem] text-sm xl:text-lg">
                A idade mínima é de 11 anos, por razões pedagógicas e por respeito aos pais e alunos. Muitos estudos, como a pesquisa linguística do MIT - Massachusetts Institute of Technology -, revelam que a melhor idade para aprender é por volta dos 10/11 anos, dependendo do país em que se vive.
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-[#1BAEA8] text-xl xl:text-2xl">Por quanto tempo tenho o curso à disposição?</span>
              <div className="h-1 w-full bg-custom-gradient-line-break rounded-full blur-xs mt-1"></div>
              <span className="text-white mt-4 xl:leading-6 xl:w-[50rem] text-sm xl:text-lg">
                O aluno UPOnline tem à sua disposição a Plataforma de estudos por 24 meses. Apesar de pagar pelo curso completo, por apenas 18 meses.
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-[#1BAEA8] text-xl xl:text-2xl">
                Como funciona o suporte - Dúvida sobre as aulas? Quais são os horários?
              </span>
              <div className="h-1 w-full bg-custom-gradient-line-break rounded-full blur-xs mt-1"></div>
              <span className="flex flex-col">
                <span className="text-white mt-4 xl:leading-6 xl:w-[50rem] text-sm xl:text-lg">Segunda à Sexta: 08h às 18h | Sábado: 09h às 12h</span>
                <span className="text-white mt-4 xl:leading-6 xl:w-[50rem] text-sm xl:text-lg">Tempo de resposta máximo: em até 24h após abertura do chamado.</span>
                <span className="text-white mt-4 xl:leading-6 xl:w-[50rem] text-sm xl:text-lg">As aberturas feitas fora do horário de atendimento serão registradas na primeira hora do próximo dia útil.</span>
                <span className="text-white mt-4 xl:leading-6 xl:w-[50rem] text-sm xl:text-lg">No caso do Chat Online, as respostas são imediatas quando enviadas na janela de atendimento: Segundas e Quartas, das 9h às 12h - Terças e Quintas, das 15h às 18h.</span>
              </span>
            </div>

            <div className="flex flex-col">
              <span className="text-[#1BAEA8] text-xl xl:text-2xl">
                Como são as aulas aos sábados?
              </span>
              <div className="h-1 w-full bg-custom-gradient-line-break rounded-full blur-xs mt-1"></div>
              <span className="flex flex-col">
                <span className="text-white mt-4 xl:leading-6 xl:w-[50rem] text-sm xl:text-lg">As aulas aos sábados são EXCLUSIVAS para a modalidade UPOnline AO VIVO.</span>
                <span className="text-white mt-4 xl:leading-6 xl:w-[50rem] text-sm xl:text-lg">São aulas AO VIVO com professor ministrando o tema por 50 minutos em exposição oral e mais 30 minutos pós-aula para tirar dúvidas e interagir com alunos presentes.</span>
                <span className="text-white mt-4 xl:leading-6 xl:w-[50rem] text-sm xl:text-lg">As aulas serão ministradas de 15 em 15 dias, cobrindo 02 Lessons por vez, ficando gravadas para que o aluno possa ter acesso e rever a aula sempre que quiser.</span>
              </span>
            </div>

            <div className="flex flex-col">
              <span className="text-[#1BAEA8] text-xl xl:text-2xl">
                Tem alguma data ou horário específico para acessar o curso?
              </span>
              <div className="h-1 w-full bg-custom-gradient-line-break rounded-full blur-xs mt-1"></div>
              <span className="flex flex-col">
                <span className="text-white mt-4 xl:leading-6 xl:w-[45rem] text-sm xl:text-lg">Por ser um curso EAD, a plataforma do UPOnline by UPTIME fica disponível para você acessar quando e onde quiser. Você define seu horário de estudo; não há data ou horário específico para acesso ao curso. Mas a disciplina é fundamental, como sempre reforçamos. Por isso, acesse o curso diariamente, como proposto pela metodologia que traz resultados, em horários nos quais você esteja livre de distrações, sejam elas profissionais ou pessoais, descansado, e em que possa separar de 15 a 30 minutos para trabalhar exclusivamente com o conteúdo do dia.</span>
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-[#1BAEA8] text-xl xl:text-2xl">
                Quanto tempo por dia preciso acessar o curso para ser fluente?
              </span>
              <div className="h-1 w-full bg-custom-gradient-line-break rounded-full blur-xs mt-1"></div>
              <span className="flex flex-col">
                <span className="text-white mt-4 xl:leading-6 xl:w-[45rem] text-sm xl:text-lg">O aluno tem a liberdade de estruturar o seu tempo de estudo. Porém, nós orientamos aos alunos que assistam a videoaula do dia de 5 a 10 vezes ininterruptas. Recomendamos que disponibilize, pelo menos, 20 minutos do seu dia para a realização das tarefas, visando ter mais tranquilidade ao decorrer do curso. O tempo médio de conclusão do curso para quem estuda de 15 a 30 minutos por dia, todos os dias, é de 18 meses.</span>
              </span>
            </div>
          </div>
        </div>

        <div className="bg-black py-8 flex items-center justify-center w-full mt-16">
          <span className="text-white font-semibold">Copyright©  2024  I  UPTIME  -  Comunicação em Inglês  I  All Rights Reserved. </span>
        </div>
      </section>
    </div>
  );
}
