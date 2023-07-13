export default function UserProfile({ params }: any) {
    return (
        <>
            <div className="Profile">
                <div className="main">
                    <h2>Profile Page</h2>
                    <p className="text-white mb-20">Profile Id </p>
                   <span className="bg-slate-500 p-2 ml-40">{params.id} </span>
                </div>
            </div>
        </>
    );
}
