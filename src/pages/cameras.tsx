import React from 'react'
import Layout from '../components/layout/main'
import SEO from '../components/seo'
import GifTip from 'src/components/gif-tip'

const cameras = [
  {
    name: 'Minolta',
    cameras: [
      {
        name: 'XG-M',
        type: 'SLR',
        color: 'silver',
      },
      {
        name: 'X-300',
        type: 'SLR',
        color: 'black',
      },
      {
        name: 'X-700',
        type: 'SLR',
        color: 'black',
      },
      {
        name: 'MAXXUM 5000',
        type: 'SLR',
        color: 'black',
      },
      {
        name: 'MAXXUM 7000',
        type: 'SLR',
        color: 'black',
      },
      {
        name: 'Dynax 7000i',
        type: 'SLR',
        color: 'black',
      },
      {
        name: 'Dynax 404si',
        type: 'SLR',
        color: 'silver',
      },
      {
        name: 'Hi-matic 7s II',
        type: 'Rangefinder',
        color: 'black',
      },
      {
        name: 'Hi-matic G',
        type: 'Rangefinder',
        color: 'black',
      },
    ],
  },
  {
    name: 'Canon',
    cameras: [
      {
        name: 'FTb',
        type: 'SLR',
        color: 'silver',
      },
      {
        name: 'AE-1 Program',
        type: 'SLR',
        color: 'black',
      },
      {
        name: 'A-1',
        type: 'SLR',
        color: 'black',
      },
      {
        name: 'AF35M',
        type: 'Point & Shoot',
        color: 'black',
      },
      {
        name: 'AF35M II',
        type: 'Point & Shoot',
        color: 'black',
      },
    ],
  },
  {
    name: 'Yashica',
    cameras: [
      {
        name: 'FX-3',
        type: 'SLR',
        color: 'black',
      },
      {
        name: 'Electro 35 GSN ',
        type: 'Rangefinder',
        color: 'silver',
      },
    ],
  },
  {
    name: 'Mamya',
    cameras: [
      {
        name: 'ZE',
        type: 'SLR',
        color: 'black',
      },
    ],
  },
  {
    name: 'Fujifilm',
    cameras: [
      {
        name: 'DL 200',
        type: 'Point & Shoot',
        color: 'black',
      },
    ],
  },
  {
    name: 'Agfa',
    cameras: [
      {
        name: 'Optima 335',
        type: 'Rangefinder',
        color: 'black',
      },
      {
        name: 'Optima 535',
        type: 'Rangefinder',
        color: 'black',
      },
      {
        name: 'Optima 1035',
        type: 'Rangefinder',
        color: 'black',
      },
      {
        name: 'Optima Flash sensor',
        type: 'Rangefinder',
        color: 'black',
      },
    ],
  },
  {
    name: 'Zeiss Ikon',
    cameras: [
      {
        name: 'Ikonta (521/16)',
        type: 'Rangefinder',
        film: '120, 6x6',
        color: 'silver',
      },
      {
        name: 'Signal Nettar 518/2',
        type: 'Rangefinder',
        film: '120, 6x9',
        color: 'silver',
      },
    ],
  },
  {
    name: 'Rollei',
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
    cameras: [
      {
        name: 'FG',
        type: 'SLR',
        color: 'silver',
      },
      {
        name: 'EM',
        type: 'SLR',
        color: 'black',
      },
      {
        name: 'FM',
        type: 'SLR',
        color: 'silver',
      },
      {
        name: 'FM',
        type: 'SLR',
        color: 'black',
      },
      {
        name: 'FM2n',
        type: 'SLR',
        color: 'black',
      },
      {
        name: 'FE',
        type: 'SLR',
        color: 'silver',
      },
      {
        name: 'FE',
        type: 'SLR',
        color: 'black',
      },
      {
        name: 'FE2',
        type: 'SLR',
        color: 'black',
      },
      {
        name: 'FA',
        type: 'SLR',
        color: 'black',
      },
      {
        name: 'F3',
        type: 'SLR',
        color: 'black',
      },
      {
        name: 'F4',
        type: 'SLR',
        color: 'black',
      },
      {
        name: 'F401',
        type: 'SLR',
        color: 'black',
      },
      {
        name: 'F501',
        type: 'SLR',
        color: 'black',
      },
      {
        name: 'F601',
        type: 'SLR',
        color: 'black',
      },
      {
        name: 'F801s',
        type: 'SLR',
        color: 'black',
      },
      {
        name: 'F65',
        type: 'SLR',
        color: 'black',
      },
      {
        name: 'F75',
        type: 'SLR',
        color: 'black',
      },
      {
        name: 'F80',
        type: 'SLR',
        color: 'black',
      },
    ],
  },
]

export default function LibraryPage() {
  return (
    <Layout>
      <SEO title="Cameras" />

      <div className="prose prose-lg max-w-none my-5 iAWriterDuospace text-gray-600 dark:text-gray-400">
        <p>
          It all started with Canon AE-1 Program. It was the very first camera I brought a year ago. I wanted to start with
          film, and the AE-1 Program was one of the most hyped one then. Then I discovered I needed a camera with
          shutter priority mode and brought Canon A-1, which, IMHO, is the superior version of the AE-1 Program. Then I
          came across an almost mint beloved Minolta X-700 and couldn't resist. Still one of my favorite. I haven't
          heard of Minolta back then, but now it's one of the tops (by quantity) cameras I own.
        </p>

        <p>
          Those are great cameras, but what is everyone talking about, Nikon? I want one, need that. And here comes the
          Nikon F3 and FA. Now I have it all... But there is an auction going on right now of FM2n in mint+++++
          condition, almost new; what is u gonna do? Get it quickly while it's hot. What about FE2? Need that...
        </p>

        <p>and the list never ends...</p>
      </div>

      <p className="mb-10 iAWriterDuospaceItalic text-gray-400">Hera are list of cameras I own:</p>

      <div className="columns-1 sm:columns-2 md:columns-3">
        {cameras.map((manufacturer) => (
          <div className="mb-10 break-inside-avoid">
            <h2 className="lead text-2xl mb-2 iAWriterDuospaceBold dark:text-gray-200">{manufacturer.name}</h2>

            <ul>
              {manufacturer.cameras.map((camera, j) => (
                <li className="text-gray-500 iAWriterDuospace py-0.5" key={camera.name}>
                  <span>{camera.name}</span>
                  {', '}
                  <span className="">{camera.type},</span> <span className="capitalize">{camera.color}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Layout>
  )
}
