type srcT = {
    src?: string | undefined;
};
export default function Pdp({
    src = "/src/components/Sidebar/assets/photo/pdpNone.png",
}: srcT) {
    if (src == "") {
        src = "/src/components/Sidebar/assets/photo/pdpNone.png";
    }
    return (
        <>
            <img
                className="object-cover w-32 h-32 mx-2 rounded-full"
                src={src}
                alt="avatar"
            />
        </>
    );
}
