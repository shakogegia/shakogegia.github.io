import React from 'react'
import Layout from '../components/layout/main'
import SEO from '../components/seo'

const cameras = [
  {
    name: 'Minolta',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Minolta_Logo.svg/1200px-Minolta_Logo.svg.png',
    cameras: [
      {
        name: 'XG-M',
        type: 'slr',
        color: 'silver',
      },
      {
        name: 'X-300',
        type: 'slr',
        color: 'black',
      },
      {
        name: 'X-700',
        type: 'slr',
        color: 'black',
      },
      {
        name: 'X-700',
        type: 'slr',
        color: 'black',
      },
    ],
  },
  {
    name: 'Canon',
    logo: 'https://global.canon/en/corporate/logo/img/logo_1935.png',
    cameras: [
      {
        name: 'FTb',
        type: 'slr',
        color: 'silver',
      },
      {
        name: 'AE-1 Program',
        type: 'slr',
        color: 'black',
      },
      {
        name: 'A-1',
        type: 'slr',
        color: 'black',
      },
      {
        name: 'EOS 650',
        type: 'slr',
        color: 'black',
      },
    ],
  },
  {
    name: 'Yashica',
    logo: '',
    cameras: [
      {
        name: 'FX-3',
        type: 'slr',
        color: 'black',
      },
    ],
  },
  {
    name: 'Mamya',
    logo: '',
    cameras: [
      {
        name: 'FX-3',
        type: 'slr',
        color: 'black',
      },
    ],
  },
  {
    name: 'Fujifilm',
    logo: '',
    cameras: [
      {
        name: 'FX-3',
        type: 'slr',
        color: 'black',
      },
    ],
  },
  {
    name: 'Agfa',
    logo: '',
    cameras: [
      {
        name: 'Optima 335',
        type: 'slr',
        color: 'black',
      },
      {
        name: 'Optima 500',
        type: 'slr',
        color: 'black',
      },
      {
        name: 'Optima 1035',
        type: 'slr',
        color: 'black',
      },
    ],
  },
  {
    name: 'Rollei',
    logo: '',
    cameras: [
      {
        name: 'LED',
        type: 'Rangefinder',
        color: 'black',
      },
      {
        name: 'B',
        type: 'Rangefinder',
        color: 'black',
      },
    ],
  },
  {
    name: 'Nikon',
    logo: 'https://flyclipart.com/thumbs/nikon-logo-transparent-svg-vector-freebie-supply-nikon-logo-1116495.png',
    cameras: [
      {
        name: 'FG',
        type: 'slr',
        color: 'silver',
      },
      {
        name: 'EM',
        type: 'slr',
        color: 'black',
      },
      {
        name: 'EM',
        type: 'slr',
        color: 'black',
      },
      {
        name: 'FM',
        type: 'slr',
        color: 'silver',
      },
      {
        name: 'FM',
        type: 'slr',
        color: 'black',
      },
      {
        name: 'FM2n',
        type: 'slr',
        color: 'black',
      },
      {
        name: 'FE',
        type: 'slr',
        color: 'silver',
      },
      {
        name: 'FE',
        type: 'slr',
        color: 'black',
      },
      {
        name: 'FE2',
        type: 'slr',
        color: 'black',
      },
      {
        name: 'FA',
        type: 'slr',
        color: 'black',
      },
      {
        name: 'F3',
        type: 'slr',
        color: 'black',
      },
      {
        name: 'F4',
        type: 'slr',
        color: 'black',
      },
      {
        name: 'F801s',
        type: 'slr',
        color: 'black',
      },
      {
        name: 'F501',
        type: 'slr',
        color: 'black',
      },
      {
        name: 'F65',
        type: 'slr',
        color: 'black',
      },
      {
        name: 'F75',
        type: 'slr',
        color: 'black',
      },
      {
        name: 'F80',
        type: 'slr',
        color: 'black',
      },
    ],
  },
]
export default function LibraryPage() {
  return (
    <Layout>
      <SEO title="Cameras" />

      <div className='prose prose-lg my-5 iAWriterDuospace text-gray-600'>
        I love cameras, especially old ones. Saving them, caring them, and collecting them.
      </div>

      <p className='mb-10 iAWriterDuospaceItalic text-gray-300'>Hera are list of cameras I own:</p>

      <div className="columns-1 sm:columns-2 md:columns-3">
        {cameras.map((manufacturer) => (
          <div className='mb-10 break-inside-avoid'>
            
            <h2 className='lead text-2xl mb-2 iAWriterDuospaceBold'>
              {manufacturer.name}
              {/* <img src={manufacturer.logo} className="h-20"/> */}
            </h2>

            <ul>
              {manufacturer.cameras.map((camera, j) => (
                <li className='text-gray-500 iAWriterDuospace' key={camera.name}>
                  <span>{manufacturer.name} {camera.name},</span>
                  {' '}
                  <span className=''>{camera.type},</span>
                  {' '}
                  <span className='capitalize'>{camera.color}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Layout>
  )
}

function LibraryPage2() {
  return (
    <Layout>
      <SEO title="Cameras" />

      <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
        <table className="min-w-full divide-y divide-gray-300">
          <thead className="bg-gray-50">
            <tr>
              <th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">Brand</th>
              <th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">Name</th>
              <th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">Type</th>
              <th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">Color</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {cameras.map(({ brand, cameras }, i) =>
              cameras.map((camera, j) => (
                <tr key={camera.name}>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{brand}</td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{camera.name}</td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{camera.type}</td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{camera.color}</td>
                </tr>
              )),
            )}
          </tbody>
        </table>
      </div>
    </Layout>
  )
}
