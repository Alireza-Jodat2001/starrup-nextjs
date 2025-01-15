'use client';

import { MapMarkerProps } from '@/types/components/mapTypes';
import mapFunctions from '@/utils/functions/mapFunctions';
import { Marker } from 'react-leaflet';

const MapMarker = ({ location }: MapMarkerProps) => {
  const { customIcon, handleMarkerClick, setShownGarage, shownGarage } = mapFunctions();

  return (
    <Marker
      position={[Number(location?.lat!), Number(location?.lon!)]}
      icon={customIcon}
      eventHandlers={{
        click: () => handleMarkerClick(location?.garage_id),
      }}
    >
      <div
        onClick={() => setShownGarage(null)}
        className={`font-[yekanbakh] fixed w-full h-screen top-0 left-0 z-[9999] cursor-default transition-all duration-200 ${
          shownGarage
            ? 'pointer-events-all opacity-100 translate-y-0'
            : 'pointer-events-none opacity-0 -translate-y-4'
        }`}
      >
        <div
          onClick={e => e.stopPropagation()}
          className="p-5 absolute w-[90vw] min-h-[300px] z-[650] bg-[#F5F6FA] rounded-[10px] left-1/2 top-[50px] -translate-x-1/2"
        >
          <img
            src={shownGarage?.image}
            className="aspect-video rounded-[10px] object-cover w-full block !mb-4"
          />

          <div className="flex items-center justify-between">
            <p className="text-[14px] font-[700]">{shownGarage?.title}</p>
            <div className="flex items-center justify-center gap-2">
              <span className="text-[14px] font-semibold translate-y-[2px]">۴.۲</span>
              <img src="/images/Card_Icons/Vector.svg" />
            </div>
          </div>

          <p className="text-[12px] mt-2">{shownGarage?.description}</p>

          <div className="flex items-center justify-between">
            <div className="mt-2 flex items-center gap-[10px]">
              <img src="/images/Card_Icons/callIcon.svg" />
              <span className="text-[14px] translate-y-[1px]">{shownGarage?.telephone}</span>
            </div>

            <a
              className="border-[2px] border-[#0098d2] px-3 py-1 rounded-md text-[10px]"
              href={`geo:${shownGarage?.lat},${shownGarage?.lon}`}
            >
              مسیریابی
            </a>
          </div>
        </div>
      </div>
    </Marker>
  );
};

export default MapMarker;
