import { colors } from "./colors/colors"

const container = { flex: 1, backgroundColor: colors.bgColor, padding: 15 }

const textLight10  = { fontSize: 10, fontFamily: 'ms-light', color: colors.textColorPri }
const textLight12 = { fontSize: 12, fontFamily: 'ms-light', color: colors.textColorPri }
const textLight14 = { fontSize: 14, fontFamily: 'ms-light', color: colors.textColorPri }
const textRegular10 = { fontSize: 10, fontFamily: 'ms-regular', color: colors.textColorPri }
const textRegular12 = { fontSize: 12, fontFamily: 'ms-regular', color: colors.textColorPri }
const textRegular14 = { fontSize: 14, fontFamily: 'ms-regular', color: colors.textColorPri }
const textSemiBold10 = { fontSize: 10, fontFamily: 'ms-semibold', color: colors.textColorPri }
const textSemiBold12 = { fontSize: 12, fontFamily: 'ms-semibold', color: colors.textColorPri }
const textSemiBold14 = { fontSize: 14, fontFamily: 'ms-semibold', color: colors.textColorPri }

const bottomSheetContainer = { flexGrow: 1, backgroundColor: colors.bgColor, paddingHorizontal: 20, paddingVertical: 10 }
const bottomSheetTitleTextStyles = { fontSize: 18, fontFamily: 'ms-semibold', color: colors.textColorPri, textAlign: 'center', marginBottom: 10 }
const bottomSheetContentWrapper = { marginTop: 5, paddingHorizontal: 5 }

const textAlignRight = { textAlign: 'right' }
const textAlignLeft = { textAlign: 'left' }
const textAlignCenter = { textAlign: 'center' }
const textAlignJustify = { textAlign: 'justify' }

const justifyCenter = { justifyContent: 'center', alignItems: 'center', textAlign: 'center' }

const marginLeft2 = { marginLeft: 2 }
const marginTop5 = { marginTop: 5 }
const marginTop10 = { marginTop: 10 }
const marginRight5 = { marginRight: 5 }
const marginRight10 = { marginRight: 10 }
const marginBottom5 = { marginBottom: 5 }
const marginBottom10 = { marginBottom: 10 }
const marginLeft5 = { marginLeft: 5 }
const marginLeft10 = { marginLeft: 10 }
const marginVertical5 = { marginVertical: 5 }
const marginVertical10 = { marginVertical: 10 }
const marginHorizontal2 = { marginHorizontal: 2 }
const marginHorizontal5 = { marginHorizontal: 5 }
const marginHorizontal10 = { marginHorizontal: 10 }

const paddingTop5 = { paddingTop: 5 }
const paddingTop10 = { paddingTop: 10 }
const paddingRight5 = { paddingRight: 5 }
const paddingRight10 = { paddingRight: 10 }
const paddingBottom5 = { paddingBottom: 5 }
const paddingBottom10 = { paddingBottom: 10 }
const paddingLeft5 = { paddingLeft: 5 }
const paddingLeft10 = { paddingLeft: 10 }
const paddingVertical5 = { paddingVertical: 5 }
const paddingVertical10 = { paddingVertical: 10 }
const paddingHorizontal5 = { paddingHorizontal: 5 }
const paddingHorizontal10 = { paddingHorizontal: 10 }

const flex1 = { flex: 1 } 
const flex2 = { flex: 2 } 
const flex3 = { flex: 3 } 
const flex4 = { flex: 4 } 
const flex5 = { flex: 5 } 
const flexGrow1 = { flexGrow: 1 }
const flexRow = { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }
const flexWrapper = { flexDirection: 'row', flexWrap: 'wrap' }

const labelTextStyles = { marginBottom: 5, marginLeft: 2, fontFamily: 'ms-light', fontSize: 12, color: colors.textColorPri }

const alertWrapper = { zIndex: 1, position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }

const w100 = {width: '100%'}
const w50 = {width: '50%'}
const w25 = {width: '25%'}

const btnColorSet = {
    set_1: [
        '#240750',
        '#006769',
        '#344C64',
        '#A91D3A',
        '#7469B6',
        '#32012F',
        '#153448',
    ],
    set_2: [
        '#074173',
        '#A34343',
        '#102C57',
        '#803D3B',
    ],
};

const hidePwStyles = { position: 'absolute', right: 15, top: 12, }

export { 
    flex1,
    flex2,
    flex3,
    flex4,
    flex5,
    flexGrow1,
    flexRow,
    flexWrapper,
    container,
    textLight10,
    textLight12,
    textLight14,
    textRegular10,
    textRegular12,
    textRegular14,
    textSemiBold10,
    textSemiBold12,
    textSemiBold14,
    textAlignRight,
    textAlignLeft,
    textAlignCenter,
    textAlignJustify,
    justifyCenter,
    marginLeft2,
    marginTop5,
    marginTop10,
    marginRight5,
    marginRight10,
    marginBottom5,
    marginBottom10,
    marginLeft5,
    marginLeft10,
    marginVertical5,
    marginVertical10,
    marginHorizontal2,
    marginHorizontal5,
    marginHorizontal10,
    paddingTop5,
    paddingTop10,
    paddingRight5,
    paddingRight10,
    paddingBottom5,
    paddingBottom10,
    paddingLeft5,
    paddingLeft10,
    paddingVertical5,
    paddingVertical10,
    paddingHorizontal5,
    paddingHorizontal10,
    bottomSheetContainer,
    bottomSheetTitleTextStyles,
    bottomSheetContentWrapper,
    labelTextStyles,
    alertWrapper,
    btnColorSet,
    w100,
    w50,
    w25,
    hidePwStyles
 }
