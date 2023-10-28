import Card from "@/components/Card";
import TopBar from "@/components/TopBar";
import WholeScreen from "@/components/WholeScreen";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const MoreBrand = () => {
  return (
    <div className="border-yellow-300 border-solid border-2 rounded-lg p-4 mb-4">
      <div className="flex gap-4 mb-4">
        <div>
          <Label>Brand Name:</Label>
          <Select>
            <SelectTrigger className="w-[190px] mt-4">
              <SelectValue placeholder="Select Brand" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Male">Example</SelectItem>
              <SelectItem value="Female">Example</SelectItem>
              <SelectItem value="Other">Example</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label>Dosage Per:</Label>
          <Select>
            <SelectTrigger className="w-[190px] mt-4">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Male">Example</SelectItem>
              <SelectItem value="Female">Example</SelectItem>
              <SelectItem value="Other">Example</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="mb-4">
        <Label>SKU:</Label>

        <Select>
          <SelectTrigger className="w-full mt-4">
            <SelectValue placeholder="Select SKU" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Male">Example</SelectItem>
            <SelectItem value="Female">Example</SelectItem>
            <SelectItem value="Other">Example</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Label>Dosage:</Label>
      <div className="flex gap-1 justify-between items-center my-4">
        <div className="flex justify-center items-center gap-2">
          <Input className="w-24" placeholder="00" />
          <Label>M</Label>
        </div>

        <div className="flex justify-center items-center gap-2">
          <Input className="w-24" placeholder="00" />
          <Label>A</Label>
        </div>

        <div className="flex justify-center items-center gap-2">
          <Input className="w-24" placeholder="00" />
          <Label>E</Label>
        </div>
      </div>
    </div>
  );
};

const AddPatient = () => {
  const navigate = useNavigate();

  const [brandTime, setBrandTime] = useState([1]);
  const [type, setType] = useState("");

  const addMoreBrandHandler = () => {
    setBrandTime([...brandTime, 1]);
  };

  const typeHandler = (event: string) => {
    setType(event);
  };

  return (
    <div className="bg-[#e0e0e0] h-full overflow-y-scroll">
      <TopBar>
        <Button
          size={"icon"}
          variant={"ghost"}
          onClick={() => navigate("/home/camp")}
        >
          <ArrowLeft />
        </Button>
        <div>{"Enroll Patients (Inside camp)"}</div>
        <div className="opacity-0">{""}</div>
      </TopBar>
      <WholeScreen>
        <Card>
          <div className="mb-4">
            <Label>Doctor Name:</Label>
            <Input className="mt-4" readOnly value={"J Rawat"} />
          </div>
          <div className="flex gap-4 mb-4">
            <div>
              <Label>OPD Date:</Label>
              <Input className="mt-4" readOnly value={"2023-10-28"} />
            </div>
            <div>
              <Label>OPD Slot:</Label>
              <Input className="mt-4" readOnly value={"7:00 PM to 9:00 PM"} />
            </div>
          </div>
        </Card>

        <Card>
          <p className="font-semibold text-lg mb-4">Patient Details</p>
          <div className="flex gap-4 mb-4">
            <div>
              <Label>Patient Name:</Label>
              <Input className="mt-4" placeholder="Enter Patient Name" />
            </div>
            <div>
              <Label>Enrollment Date:</Label>
              <Input className="mt-4" readOnly value={"2023-10-28"} />
            </div>
          </div>

          <div className="flex gap-4 mb-4">
            <div>
              <Label>Gender:</Label>
              <Select>
                <SelectTrigger className="w-[200px] mt-4">
                  <SelectValue placeholder="Select Gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Male">Male</SelectItem>
                  <SelectItem value="Female">Female</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Age:</Label>
              <Input className="mt-4" />
            </div>
          </div>

          <div className="flex gap-4 mb-4">
            <div>
              <Label>Pincode:</Label>
              <Select>
                <SelectTrigger className="w-[200px] mt-4">
                  <SelectValue placeholder="Select Pin code" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Male">400077</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Mobile No:</Label>
              <Input className="mt-4" placeholder="Enter Mobile No." />
            </div>
          </div>

          <div className="flex gap-4 mb-4">
            <div>
              <Label>State:</Label>
              <Select>
                <SelectTrigger className="w-[200px] mt-4">
                  <SelectValue placeholder="Select State" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Male">State</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>City:</Label>
              <Select>
                <SelectTrigger className="w-[200px] mt-4">
                  <SelectValue placeholder="Select City" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Male">400077</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="mb-4">
            <Label>Address:</Label>
            <Textarea className="mt-4" placeholder="Address" />
          </div>
        </Card>

        <Card>
          <p className="font-semibold text-lg mb-4">Diagnosis</p>
          <div className="mb-4">
            <Select>
              <SelectTrigger className="w-full mt-4">
                <SelectValue placeholder="Select Diagnosis" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Male">Example</SelectItem>
                <SelectItem value="Female">Example</SelectItem>
                <SelectItem value="Other">Example</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="mb-4">
            <Label>Other comorbid conditions:</Label>
            <Textarea className="mt-4" placeholder="Comorbid conditions" />
          </div>
        </Card>

        <Card>
          {brandTime.map((_singleBrand, index) => {
            return <MoreBrand key={index} />;
          })}
          <div className="mt-6 text-yellow-300 border-yellow-300 border-solid border-2 rounded-lg">
            <Button
              className="w-full"
              variant={"outline"}
              onClick={addMoreBrandHandler}
            >
              <Plus />
              Add More Brand
            </Button>
          </div>

          <div className="mt-4">
            <Label>Glucose Level:</Label>
            <div className="flex gap-1 justify-between items-center my-4">
              <div className="flex justify-center items-center gap-2">
                <Input className="w-28" placeholder="Fasting" />
              </div>

              <div className="flex justify-center items-center gap-2">
                <Input className="w-28" placeholder="PP" />
              </div>

              <div className="flex justify-center items-center gap-2">
                <Input className="w-28" placeholder="HBA1c" />
              </div>
            </div>
          </div>

          <Label>Type:</Label>
          <div className="mb-4">
            <Select onValueChange={typeHandler}>
              <SelectTrigger className="w-[250px] mt-4">
                <SelectValue placeholder="Select Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Enrolled">Enrolled</SelectItem>
                <SelectItem value="Enrolled + Initiated">
                  Enrolled + Initiated
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          {type === "Enrolled" && (
            <div className="flex gap-4 mb-4">
              <div>
                <Label>Likely purchase date:</Label>
                <Input className="mt-4 w-[200px]" type="date" />
              </div>
              <div>
                <Label>Reason for not purchase:</Label>
                <Select>
                  <SelectTrigger className="w-[200px] mt-4">
                    <SelectValue placeholder="Select Reason" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Male">Example</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}

          {type === "Enrolled + Initiated" && (
            <div className="flex gap-4 mb-4">
              <div>
                <Label>Product Image:</Label>
                <RadioGroup
                  className="flex gap-6 mt-4"
                  defaultValue="option-one"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      className=""
                      value="option-one"
                      id="option-one"
                    />
                    <Label htmlFor="option-one">OTP</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      className=""
                      value="option-two"
                      id="option-two"
                    />
                    <Label htmlFor="option-two">Upload Form</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          )}

          <div className="flex gap-4 mb-4">
            <div>
              <Label>DND:</Label>
              <RadioGroup className="flex gap-6 mt-4" defaultValue="option-one">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    className=""
                    value="option-one"
                    id="option-one"
                  />
                  <Label htmlFor="option-one">Yes</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    className=""
                    value="option-two"
                    id="option-two"
                  />
                  <Label htmlFor="option-two">No</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
          <div className="mb-4">
            <Label>Notes:</Label>
            <Textarea className="mt-4" placeholder="Note" />
          </div>
        </Card>

        <div className="flex justify-center items-center m-4">
          <Button className="px-6 bg-yellow-500 hover:bg-yellow-500/90">
            Submit
          </Button>
        </div>
      </WholeScreen>
    </div>
  );
};

export default AddPatient;
