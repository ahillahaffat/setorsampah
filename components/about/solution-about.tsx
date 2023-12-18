import React from 'react';

interface FaqItemProps {
  step: string;
  title: string;
  description: string;
}

const FaqItem: React.FC<FaqItemProps> = ({ step, title, description }) => {
  return (
    <div className="mb-12 lg:mb-[70px] flex">
  <div className="bg-green-50 mr-4 flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center">
    <span className="text-sm md:text-xl lg:text-lg text-gray-120 font-semibold text-white">{step}</span>
  </div>

  <div className="w-full">
    <h3 className="mb-6 xs:mt-2 xs:mb-2 text-black font-semibold text-md md:text-xl lg:text-lg">
      {title}
    </h3>
    <p className="text-gray-120 regular-16 xl:regular-18">
      {description}
    </p>
  </div>
</div>

  );
};

const SolutionAbout = () => {
  const faqItems = [
    {
      step: '1',
      title: 'Kesadaran Lingkungan',
      description: 'Meningkatkan kesadaran masyarakat umum terhadap pentingnya menjaga kebersihan lingkungan, terutama di tempat-tempat wisata.',
    },
    {
      step: '2',
      title: 'Partisipasi Aktif',
      description:
        'Memberikan kesempatan kepada semua orang untuk berpartisipasi aktif dalam pemantauan dan pengelolaan sampah di destinasi wisata.',
    },
    {
      step: '3',
      title: 'Edukasi Lingkungan',
    description:
      'Memberikan informasi dan edukasi kepada masyarakat umum tentang dampak sampah terhadap alam dan cara mereka dapat membantu dalam menjaga kebersihan lingkungan.',
    },
    {
      step: '4',
      title: 'Responsibilitas Pribadi',
      description:'Mendorong tanggung jawab pribadi dalam membuang sampah dengan benar dan tidak meninggalkan jejak sampah di tempat wisata.',
  },
    // Add more FAQ items as needed
  ];
  const faqItems2 = [
    {
      step: '1',
      title: 'Pemantauan Real-time',
      description: 'Memungkinkan pengelola tempat wisata untuk memantau dan mengelola sampah secara real-time berdasarkan data yang dikumpulkan dari pengguna aplikasi.',
    },
    {
      step: '2',
      title: 'Optimasi Pengelolaan Sampah',
      description: 'Menyediakan informasi yang dapat digunakan untuk mengoptimalkan pengelolaan sampah, termasuk alokasi sumber daya dan penataan area yang efektif.',
    },
    {
      step: '3',
      title: 'Keputusan Berbasis Data',
      description: 'Memberikan dasar data yang kuat untuk pengambilan keputusan terkait kebersihan tempat wisata dan strategi pengelolaan sampah.',
    },
    {
      step: '4',
      title: 'Peningkatan Citra dan Keberlanjutan',
      description: 'Penerapan aplikasi ini dapat meningkatkan citra tempat wisata sebagai destinasi yang peduli lingkungan dan berkomitmen pada keberlanjutan.',
    },
    // Add more additional cards as needed
  ];

  return (
    <section className="relative z-20 overflow-hidden bg-white p-8 pb-8 lg:pt-0 lg:pb-[50px]" data-aos="fade-up">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[520px] text-center">
              <h2 className="text-black mb-3 text-3xl leading-[1.2] font-bold sm:text-4xl md:text-[40px]">
                <strong>Kami Hadir</strong>
              </h2>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-800 via-green-50 to-green-201 py-3 mx-auto max-w-[485px] font-semibold text-xl">
                Untuk Semua Orang
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap -mx-4">
          {faqItems.map((faq, index) => (
            <div key={index} className="w-full px-4 lg:w-1/2">
              <FaqItem {...faq} />
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[520px] text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-800 via-green-50 to-green-201 py-3 mx-auto max-w-[485px] font-semibold text-xl">
                Untuk Pihak Pengelola
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap -mx-4">
          {faqItems2.map((faq, index) => (
            <div key={index} className="w-full px-4 lg:w-1/2">
              <FaqItem {...faq} />
            </div>
          ))}
        </div>
      </div>
      <div>
        <span className="absolute top-4 left-4 -z-[1]">
        <svg width="48" height="134" viewBox="0 0 48 134" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="45.6673" cy="132" r="1.66667" transform="rotate(180 45.6673 132)" fill="#13C296" />
          <circle cx="45.6673" cy="117.333" r="1.66667" transform="rotate(180 45.6673 117.333)" fill="#13C296" />
          <circle cx="45.6673" cy="102.667" r="1.66667" transform="rotate(180 45.6673 102.667)" fill="#13C296" />
          <circle cx="45.6673" cy="88.0001" r="1.66667" transform="rotate(180 45.6673 88.0001)" fill="#13C296" />
          <circle cx="45.6673" cy="73.3335" r="1.66667" transform="rotate(180 45.6673 73.3335)" fill="#13C296" />
          <circle cx="45.6673" cy="45.0001" r="1.66667" transform="rotate(180 45.6673 45.0001)" fill="#13C296" />
          <circle cx="45.6673" cy="16.0001" r="1.66667" transform="rotate(180 45.6673 16.0001)" fill="#13C296" />
          <circle cx="45.6673" cy="59.0001" r="1.66667" transform="rotate(180 45.6673 59.0001)" fill="#13C296" />
          <circle cx="45.6673" cy="30.6668" r="1.66667" transform="rotate(180 45.6673 30.6668)" fill="#13C296" />
          <circle cx="45.6673" cy="1.66683" r="1.66667" transform="rotate(180 45.6673 1.66683)" fill="#13C296" />
          <circle cx="31.0013" cy="132" r="1.66667" transform="rotate(180 31.0013 132)" fill="#13C296" />
          <circle cx="31.0013" cy="117.333" r="1.66667" transform="rotate(180 31.0013 117.333)" fill="#13C296" />
          <circle cx="31.0013" cy="102.667" r="1.66667" transform="rotate(180 31.0013 102.667)" fill="#13C296" />
          <circle cx="31.0013" cy="88.0001" r="1.66667" transform="rotate(180 31.0013 88.0001)" fill="#13C296" />
          <circle cx="31.0013" cy="73.3335" r="1.66667" transform="rotate(180 31.0013 73.3335)" fill="#13C296" />
          <circle cx="31.0013" cy="45.0001" r="1.66667" transform="rotate(180 31.0013 45.0001)" fill="#13C296" />
          <circle cx="31.0013" cy="16.0001" r="1.66667" transform="rotate(180 31.0013 16.0001)" fill="#13C296" />
          <circle cx="31.0013" cy="59.0001" r="1.66667" transform="rotate(180 31.0013 59.0001)" fill="#13C296" />
          <circle cx="31.0013" cy="30.6668" r="1.66667" transform="rotate(180 31.0013 30.6668)" fill="#13C296" />
          <circle cx="31.0013" cy="1.66683" r="1.66667" transform="rotate(180 31.0013 1.66683)" fill="#13C296" />
          <circle cx="16.3333" cy="132" r="1.66667" transform="rotate(180 16.3333 132)" fill="#13C296" />
          <circle cx="16.3333" cy="117.333" r="1.66667" transform="rotate(180 16.3333 117.333)" fill="#13C296" />
          <circle cx="16.3333" cy="102.667" r="1.66667" transform="rotate(180 16.3333 102.667)" fill="#13C296" />
          <circle cx="16.3333" cy="88.0001" r="1.66667" transform="rotate(180 16.3333 88.0001)" fill="#13C296" />
          <circle cx="16.3333" cy="73.3335" r="1.66667" transform="rotate(180 16.3333 73.3335)" fill="#13C296" />
          <circle cx="16.3333" cy="45.0001" r="1.66667" transform="rotate(180 16.3333 45.0001)" fill="#13C296" />
          <circle cx="16.3333" cy="16.0001" r="1.66667" transform="rotate(180 16.3333 16.0001)" fill="#13C296" />
          <circle cx="16.3333" cy="59.0001" r="1.66667" transform="rotate(180 16.3333 59.0001)" fill="#13C296" />
          <circle cx="16.3333" cy="30.6668" r="1.66667" transform="rotate(180 16.3333 30.6668)" fill="#13C296" />
          <circle cx="16.3333" cy="1.66683" r="1.66667" transform="rotate(180 16.3333 1.66683)" fill="#13C296" />
          <circle cx="1.66732" cy="132" r="1.66667" transform="rotate(180 1.66732 132)" fill="#13C296" />
          <circle cx="1.66732" cy="117.333" r="1.66667" transform="rotate(180 1.66732 117.333)" fill="#13C296" />
          <circle cx="1.66732" cy="102.667" r="1.66667" transform="rotate(180 1.66732 102.667)" fill="#13C296" />
          <circle cx="1.66732" cy="88.0001" r="1.66667" transform="rotate(180 1.66732 88.0001)" fill="#13C296" />
          <circle cx="1.66732" cy="73.3335" r="1.66667" transform="rotate(180 1.66732 73.3335)" fill="#13C296" />
          <circle cx="1.66732" cy="45.0001" r="1.66667" transform="rotate(180 1.66732 45.0001)" fill="#13C296" />
          <circle cx="1.66732" cy="16.0001" r="1.66667" transform="rotate(180 1.66732 16.0001)" fill="#13C296" />
          <circle cx="1.66732" cy="59.0001" r="1.66667" transform="rotate(180 1.66732 59.0001)" fill="#13C296" />
          <circle cx="1.66732" cy="30.6668" r="1.66667" transform="rotate(180 1.66732 30.6668)" fill="#13C296" />
          <circle cx="1.66732" cy="1.66683" r="1.66667" transform="rotate(180 1.66732 1.66683)" fill="#13C296" />
        </svg>
      </span>
      <span className="absolute bottom-4 right-4 -z-[1]">
        <svg width="48" height="134" viewBox="0 0 48 134" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="45.6673" cy="132" r="1.66667" transform="rotate(180 45.6673 132)" fill="#3758F9" />
          <circle cx="45.6673" cy="117.333" r="1.66667" transform="rotate(180 45.6673 117.333)" fill="#3758F9" />
          <circle cx="45.6673" cy="102.667" r="1.66667" transform="rotate(180 45.6673 102.667)" fill="#3758F9" />
          <circle cx="45.6673" cy="88.0001" r="1.66667" transform="rotate(180 45.6673 88.0001)" fill="#3758F9" />
          <circle cx="45.6673" cy="73.3333" r="1.66667" transform="rotate(180 45.6673 73.3333)" fill="#3758F9" />
          <circle cx="45.6673" cy="45.0001" r="1.66667" transform="rotate(180 45.6673 45.0001)" fill="#3758F9" />
          <circle cx="45.6673" cy="16.0001" r="1.66667" transform="rotate(180 45.6673 16.0001)" fill="#3758F9" />
          <circle cx="45.6673" cy="59.0001" r="1.66667" transform="rotate(180 45.6673 59.0001)" fill="#3758F9" />
          <circle cx="45.6673" cy="30.6668" r="1.66667" transform="rotate(180 45.6673 30.6668)" fill="#3758F9" />
          <circle cx="45.6673" cy="1.66683" r="1.66667" transform="rotate(180 45.6673 1.66683)" fill="#3758F9" />
          <circle cx="31.0006" cy="132" r="1.66667" transform="rotate(180 31.0006 132)" fill="#3758F9" />
          <circle cx="31.0006" cy="117.333" r="1.66667" transform="rotate(180 31.0006 117.333)" fill="#3758F9" />
          <circle cx="31.0006" cy="102.667" r="1.66667" transform="rotate(180 31.0006 102.667)" fill="#3758F9" />
          <circle cx="31.0006" cy="88.0001" r="1.66667" transform="rotate(180 31.0006 88.0001)" fill="#3758F9" />
          <circle cx="31.0008" cy="73.3333" r="1.66667" transform="rotate(180 31.0008 73.3333)" fill="#3758F9" />
          <circle cx="31.0008" cy="45.0001" r="1.66667" transform="rotate(180 31.0008 45.0001)" fill="#3758F9" />
          <circle cx="31.0008" cy="16.0001" r="1.66667" transform="rotate(180 31.0008 16.0001)" fill="#3758F9" />
          <circle cx="31.0008" cy="59.0001" r="1.66667" transform="rotate(180 31.0008 59.0001)" fill="#3758F9" />
          <circle cx="31.0008" cy="30.6668" r="1.66667" transform="rotate(180 31.0008 30.6668)" fill="#3758F9" />
          <circle cx="31.0008" cy="1.66683" r="1.66667" transform="rotate(180 31.0008 1.66683)" fill="#3758F9" />
          <circle cx="16.3341" cy="132" r="1.66667" transform="rotate(180 16.3341 132)" fill="#3758F9" />
          <circle cx="16.3341" cy="117.333" r="1.66667" transform="rotate(180 16.3341 117.333)" fill="#3758F9" />
          <circle cx="16.3341" cy="102.667" r="1.66667" transform="rotate(180 16.3341 102.667)" fill="#3758F9" />
          <circle cx="16.3341" cy="88.0001" r="1.66667" transform="rotate(180 16.3341 88.0001)" fill="#3758F9" />
          <circle cx="16.3338" cy="73.3333" r="1.66667" transform="rotate(180 16.3338 73.3333)" fill="#3758F9" />
          <circle cx="16.3338" cy="45.0001" r="1.66667" transform="rotate(180 16.3338 45.0001)" fill="#3758F9" />
          <circle cx="16.3338" cy="16.0001" r="1.66667" transform="rotate(180 16.3338 16.0001)" fill="#3758F9" />
          <circle cx="16.3338" cy="59.0001" r="1.66667" transform="rotate(180 16.3338 59.0001)" fill="#3758F9" />
          <circle cx="16.3338" cy="30.6668" r="1.66667" transform="rotate(180 16.3338 30.6668)" fill="#3758F9" />
          <circle cx="16.3338" cy="1.66683" r="1.66667" transform="rotate(180 16.3338 1.66683)" fill="#3758F9" />
          <circle cx="1.66732" cy="132" r="1.66667" transform="rotate(180 1.66732 132)" fill="#3758F9" />
          <circle cx="1.66732" cy="117.333" r="1.66667" transform="rotate(180 1.66732 117.333)" fill="#3758F9" />
          <circle cx="1.66732" cy="102.667" r="1.66667" transform="rotate(180 1.66732 102.667)" fill="#3758F9" />
          <circle cx="1.66732" cy="88.0001" r="1.66667" transform="rotate(180 1.66732 88.0001)" fill="#3758F9" />
          <circle cx="1.66732" cy="73.3333" r="1.66667" transform="rotate(180 1.66732 73.3333)" fill="#3758F9" />
          <circle cx="1.66732" cy="45.0001" r="1.66667" transform="rotate(180 1.66732 45.0001)" fill="#3758F9" />
          <circle cx="1.66732" cy="16.0001" r="1.66667" transform="rotate(180 1.66732 16.0001)" fill="#3758F9" />
          <circle cx="1.66732" cy="59.0001" r="1.66667" transform="rotate(180 1.66732 59.0001)" fill="#3758F9" />
          <circle cx="1.66732" cy="30.6668" r="1.66667" transform="rotate(180 1.66732 30.6668)" fill="#3758F9" />
          <circle cx="1.66732" cy="1.66683" r="1.66667" transform="rotate(180 1.66732 1.66683)" fill="#3758F9" />
        </svg>
        </span>
      </div>
    </section>
  );
};

export default SolutionAbout;
