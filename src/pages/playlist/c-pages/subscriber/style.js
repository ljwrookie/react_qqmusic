import styled from 'styled-components';
import { LIGHT_MODE, DARK_MODE, getMode } from '@/common/constants';


const { themeColor } = (getMode() === 'LIGHT_MODE' ? LIGHT_MODE : DARK_MODE)
export const SubScriberWrapper = styled.div`
`