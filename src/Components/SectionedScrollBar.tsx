import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { ElevatedPaper } from "./ElevatedPaper";

export const SectionedScrollBar = (props: any) => {
    const [scrollTop, setScrollTop] = useState<number>(0);

    useEffect(() => {
        //calculates percent scrolled from top of page
        const handleScroll = (e: any) => {
            const scrollTop = e.target.scrollTop;
            setScrollTop(scrollTop);
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    return (
        <Box sx={{
            width: '30px', height: 'auto', position: 'fixed', right: '20px', top: '50%', zIndex: '1',
        }} >
            <ElevatedPaper sx={{ height: 'max-content', pt: '20px', pb: '20px', borderRadius: '15px' }}>
                test test test test test test test test test test
            </ElevatedPaper>

        </Box >
    )
}