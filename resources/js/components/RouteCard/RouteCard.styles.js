export default {
    bgImg: {
        width: 1,
        aspectRatio: "16 / 9",
        objectFit: "cover",
    },
    card: {
        m: 2,

        display: "block",
        position: "relative",
    },
    chip: {
        position: "absolute",
        top: 16,
        right: 16,
    },
    description: {
        textOverflow: "ellipsis",
        display: "block",
        wordWrap: "break-word",
        overflow: "hidden",
        maxHeight: "3.6em",
        lineHeight: "1.8em",
        mb:1,
    },
    cardContent: {
        position: "relative",
        p: 2,
        pt: 6,
    },
    toolTipButton:{
        color:'secondary',
        fontSize:12,
    },
    statsWrap:{
        position: "absolute",
        backgroundColor: "white",
        top: -36,
        px: 0,
        pt: 2,
        pb: 1,
        boxShadow: 1,

        left: "50%",
        transform: "translateX(-50%)",
        width: "calc(100% - 32px)",

        borderRadius: 2,
    }
};
