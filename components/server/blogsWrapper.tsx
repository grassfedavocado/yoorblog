type Props = {
    children: any;
};

export default function BlogsWrapper(props: Props) {
    return <div className="my-5 flex flex-col items-center justify-around gap-y-12 pb-6 lg:flex-row lg:flex-wrap">
        {props.children}
    </div>;
}