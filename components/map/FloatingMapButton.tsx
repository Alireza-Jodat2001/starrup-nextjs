import { Box, Typography } from '@mui/material';
import Link from 'next/link';

const FloatingMapButton = () => (
  <Link
    href="/"
    className="absolute bottom-[20px] left-1/2 transform -translate-x-1/2 bg-[#727B84] shadow-[0_6px_30px_5px_#0000001F] w-[110px] h-[45px] text-white flex gap-[5px] justify-center rounded-[25px] z-[1000] items-center"
  >
    <Box component="img" src="/icons/map/map.svg" className="w-[20px]" />
    <Typography variant="h2" color="primary.contrastText" className="!text-[15px]">
      لیست
    </Typography>
  </Link>
);

export default FloatingMapButton;
