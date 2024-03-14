import React, { useEffect } from 'react';

const Salary = () => {
    useEffect(() => {
        document.documentElement.classList.add("salary");
        return () => {
            document.documentElement.classList.remove("salary");
        };
    }, []);

    return (
        <div className="container">
            <h1>Salary</h1>
            <div className="table-responsive">
                <table className="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th className="text-nowrap">Employee ID</th>
                            <th className="text-nowrap">BASIC</th>
                            <th className="text-nowrap">HRA</th>
                            <th className="text-nowrap">CONVEYANCE ALLOWANCE</th>
                            <th className="text-nowrap">SPECIAL ALLOWANCE</th>
                            <th className="text-nowrap">EDUCATION ALLOWANCE</th>
                            <th className="text-nowrap">PROFESSIONAL TAX</th>
                            <th className="text-nowrap">MEDICAL ALLOWANCE</th>
                            <th className="text-nowrap">MONTH</th>
                            <th className="text-nowrap">YEAR</th>
                            <th className="text-nowrap">GROUP INSURANCE</th>
                            <th className="text-nowrap">INCOME TAX</th>
                            <th className="text-nowrap">PROVIDENT FUND</th>
                            <th className="text-nowrap">GROSS</th>
                            <th className="text-nowrap">NET PAY</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="text-nowrap">1</td>
                            <td className="text-nowrap">10000</td>
                            <td className="text-nowrap">2000</td>
                            <td className="text-nowrap">500</td>
                            <td className="text-nowrap">1000</td>
                            <td className="text-nowrap">00</td>
                            <td className="text-nowrap">200</td>
                            <td className="text-nowrap">300</td>
                            <td className="text-nowrap">January</td>
                            <td className="text-nowrap">2024</td>
                            <td className="text-nowrap">1000</td>
                            <td className="text-nowrap">500</td>
                            <td className="text-nowrap">800</td>
                            <td className="text-nowrap">14000</td>
                            <td className="text-nowrap">12000</td>
                        </tr>
                        <tr>
                            <td className="text-nowrap">2</td>
                            <td className="text-nowrap">10000</td>
                            <td className="text-nowrap">2000</td>
                            <td className="text-nowrap">500</td>
                            <td className="text-nowrap">1000</td>
                            <td className="text-nowrap">00</td>
                            <td className="text-nowrap">200</td>
                            <td className="text-nowrap">300</td>
                            <td className="text-nowrap">January</td>
                            <td className="text-nowrap">2024</td>
                            <td className="text-nowrap">1000</td>
                            <td className="text-nowrap">500</td>
                            <td className="text-nowrap">800</td>
                            <td className="text-nowrap">14000</td>
                            <td className="text-nowrap">12000</td>
                        </tr>
                        <tr>
                            <td className="text-nowrap">3</td>
                            <td className="text-nowrap">10000</td>
                            <td className="text-nowrap">2000</td>
                            <td className="text-nowrap">500</td>
                            <td className="text-nowrap">1000</td>
                            <td className="text-nowrap">00</td>
                            <td className="text-nowrap">200</td>
                            <td className="text-nowrap">300</td>
                            <td className="text-nowrap">January</td>
                            <td className="text-nowrap">2024</td>
                            <td className="text-nowrap">1000</td>
                            <td className="text-nowrap">500</td>
                            <td className="text-nowrap">800</td>
                            <td className="text-nowrap">14000</td>
                            <td className="text-nowrap">12000</td>
                        </tr>
                        {/* Add more rows here as needed */}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Salary;
