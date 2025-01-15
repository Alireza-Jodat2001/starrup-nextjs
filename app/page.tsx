import dynamic from 'next/dynamic';
const MapComponent = dynamic(() => import('@/components/map/Map'), { ssr: false });

const page = () => <MapComponent />;

export default page;
