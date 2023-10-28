import Card from "@/components/Card";
import TopBar from "@/components/TopBar";
import WholeScreen from "@/components/WholeScreen";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import {
  ArrowLeft,
  Home,
  MapPin,
  Plus,
  User,
  UserPlus2,
  X,
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Camp = () => {
  const navigate = useNavigate();

  const [cancelOpd, setCancelOpd] = useState<boolean>(false);

  const cancelOpdHandler = () => {
    setCancelOpd(true);
  };

  return (
    <>
      <div className="bg-[#e0e0e0] h-full overflow-y-scroll">
        <TopBar>
          <Button
            size={"icon"}
            variant={"ghost"}
            onClick={() => navigate("/home")}
          >
            <ArrowLeft />
          </Button>
          <div>Camp</div>
          <div className="opacity-0">{"dfd"}</div>
        </TopBar>
        <WholeScreen>
          {/* <OpdDetails/> */}
          {/* <AddPatient/> */}
          <Card>
            <div className="text-sm">
              <p className="opacity-50">2023-10-02</p>
              <div className="flex justify-between items-center mt-2">
                <p>6pm - 11pm</p>
                <p>Start Time: 18:16</p>
              </div>
            </div>
            <Separator className="w-full my-4 bg-black/50 opacity-50" />
            <div className="flex flex-col">
              <p className="flex gap-2 mb-2 items-center">
                <Home />
                Arpan Panda
              </p>
              <p className="flex gap-2 mb-2 items-center">
                <User />
                Dr Arindam Ray
              </p>
              <p className="flex gap-2 mb-2 items-center">
                <MapPin />
                Uttarpara, 715522
              </p>
            </div>

            <div className="flex justify-end mx-auto gap-4 mt-6">
              <Button
                onClick={cancelOpdHandler}
                className="rounded-2xl bg-gray-600 hover:bg-gray-600/90"
              >
                Cancel OPD
              </Button>
              <Button className="rounded-2xl" variant={"destructive"}>
                End OPD
              </Button>
            </div>
          </Card>

          {cancelOpd && (
            <>
              <Card>
                <div>
                  <div>
                    <div className="flex justify-between items-center">
                      <p className="font-semibold">Cancel OPD Reason</p>
                      <Button
                        size={"icon"}
                        variant={"ghost"}
                        onClick={() => setCancelOpd(false)}
                      >
                        <X />
                      </Button>
                    </div>

                    <p className="text-sm mt-4">Cancel Reason</p>
                  </div>
                  <div className="mt-8">
                    <Select>
                      <SelectTrigger className="w-[100px]">
                        <SelectValue placeholder="Cancel" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Doctor On Leave">
                          Doctor On Leave
                        </SelectItem>
                        <SelectItem value="Doctor not available">
                          Doctor not available
                        </SelectItem>
                        <SelectItem value="No Patients">No Patients</SelectItem>
                        <SelectItem value="Others">Others</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </Card>
              <div className="flex justify-center items-center">
                <Button className="rounded-xl text-xl p-6 bg-yellow-400 flex justify-center items-center hover:bg-yellow-400/90">
                  Submit
                </Button>
              </div>
            </>
          )}

          {!cancelOpd && (
            <Card>
              <div>
                <div>
                  <p className="flex gap-2 mb-2 items-center">
                    <UserPlus2 />
                    Patients Enrollment
                  </p>
                </div>
                <div className="mt-8">
                  <Button
                    onClick={() => navigate("/home/addPatient")}
                    className="rounded-3xl bg-yellow-400 flex gap-2 hover:bg-yellow-400/90"
                  >
                    <Plus />
                    Add Patient
                  </Button>
                </div>
              </div>
            </Card>
          )}
        </WholeScreen>
      </div>
    </>
  );
};

export default Camp;
