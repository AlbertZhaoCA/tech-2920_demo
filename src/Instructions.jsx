export default function Instruction({ instructions }) {
    const ins = instructions.split("\n").filter((instruction) => instruction.trim() !== '');
    return (
        <table className="">
            <tbody>
                {ins.map((instruction, index) => (
                    <tr key={index}>
                        <td className="border px-4 py-2">{instruction}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}