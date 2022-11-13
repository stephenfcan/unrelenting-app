import React from 'react'

const SizingChart = () => {
  return (
    <div className='success-wrapper'>
      <div className='success flex flex-col min-h-[60vh] justify-center items-center m-auto px-8 md:px-40 xl:px-60'>
        <h2 className='font-semibold mt-1'>Sizing Chart</h2>
        <table className='mt-7 text-center table-fixed border border-black border-collapse'>
          <thead>
            <tr>
              <th className='border border-black md:p-2'>Size</th>
              <th className='border border-black'>XS</th>
              <th className='border border-black'>S</th>
              <th className='border border-black'>M</th>
              <th className='border border-black'>L</th>
              <th className='border border-black'>XL</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className='border border-black md:p-2'>UK Size</th>
              <td className='border border-black'>10</td>
              <td className='border border-black'>12</td>
              <td className='border border-black'>14</td>
              <td className='border border-black'>16</td>
              <td className='border border-black'>18</td>
            </tr>
            <tr>
              <th className='border border-black'>Chest</th>
              <td className='border border-black md:p-2'>30"-32"</td>
              <td className='border border-black md:p-2'>34"-36"</td>
              <td className='border border-black md:p-2'>38"-40"</td>
              <td className='border border-black md:p-2'>42"-44"</td>
              <td className='border border-black md:p-2'>46"-48"</td>
            </tr>
            <tr>
              <th className='border border-black md:p-2'>Waist</th>
              <td className='border border-black'>26"-28"</td>
              <td className='border border-black'>30"-32"</td>
              <td className='border border-black'>34"-36"</td>
              <td className='border border-black'>38"-40"</td>
              <td className='border border-black'>42"-44"</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default SizingChart