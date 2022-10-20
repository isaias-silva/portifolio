/* eslint-disable @next/next/no-img-element */
import Ssection from "../styledComponents/sSection";
import Image from "next/image";
import perfil from '../public/perfil.jpeg'
import Ipost from "../interfaces/Ipost";
export default function Section({ type }: any, post?: Ipost) {
        if (type == 'about') {
                return <Ssection>

                        <h2>who i am:</h2>
                        <div className="perfil">
                                <Image src={perfil} width={200} height={200} alt='perfil' />

                        </div>
                        <p>my name is Isaiah, better known as Zack, i am a student of computer science and fullstack developer!</p>

                        <h2>my hardskills:</h2>
                        <div className="stack">
                                <img src="https://camo.githubusercontent.com/900baefb89e187c8b32cdbb3b440d1502fe8f30a1a335cc5dc5868af0142f8b1/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f6e6f64656a732f6e6f64656a732d6f726967696e616c2e737667" alt="image" />
                                <img src="https://camo.githubusercontent.com/442c452cb73752bb1914ce03fce2017056d651a2099696b8594ddf5ccc74825e/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f6a6176617363726970742f6a6176617363726970742d6f726967696e616c2e737667" alt="" />
                                <img src="https://camo.githubusercontent.com/aa8b3e6b6fc55ea158e132e1c33ba6aa7fe49706a4e4bd64701af1cf89f514b5/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f747970657363726970742f747970657363726970742d6f726967696e616c2e737667" alt="" />
                                <img src="https://camo.githubusercontent.com/27d0b117da00485c56d69aef0fa310a3f8a07abecc8aa15fa38c8b78526c60ac/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f72656163742f72656163742d6f726967696e616c2e737667" alt="" />
                                <img src="https://camo.githubusercontent.com/dd8b0601cdfefe534a6a26f4c29c7f8a5fcfc315002655f519c73121f7bad8bc/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f707974686f6e2f707974686f6e2d6f726967696e616c2e737667" alt="" />
                                <img src="https://camo.githubusercontent.com/65b616ed4448c46e59c11345a1d49a01adc6d51f9bd6e93ee61d29573e04c597/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f6a6176612f6a6176612d6f726967696e616c2d776f72646d61726b2e737667" alt="" />
                                <img src="https://camo.githubusercontent.com/2e496d4bfc6f753ddca87b521ce95c88219f77800212ffa6d4401ad368c82170/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f637373332f637373332d6f726967696e616c2e737667" alt="" />
                                <img src="https://camo.githubusercontent.com/da7acacadecf91d6dc02efcd2be086bb6d78ddff19a1b7a0ab2755a6fda8b1e9/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f68746d6c352f68746d6c352d6f726967696e616c2e737667" alt="" />
                                <img src="https://www.rlogical.com/wp-content/uploads/2021/08/Rlogical-Blog-Images-thumbnail.png" alt="" />
                                <img src="https://assets.website-files.com/61ca3f775a79ec5f87fcf937/6202fcdee5ee8636a145a41b_1234.png" alt="" />
                                <img src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" alt="" />
                                <img src="https://camo.githubusercontent.com/e28ded186e568aba00abd5c8830f26d821add2d97ddf4a41cf545ec6a1245758/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f6865726f6b752f6865726f6b752d706c61696e2e737667" alt="" />
                                <img src="https://www.nicepng.com/png/full/308-3084680_rust-programming-language-rust-programming-language-logo.png" alt="" />
                        </div>
                        <h2>
                                Softskills:
                        </h2>
                </Ssection>
        } else {
                return <></>
        }
}