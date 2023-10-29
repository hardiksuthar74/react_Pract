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
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  doctorName: z.string().min(1, {
    message: "Doctor Name is required.",
  }),
  opdDate: z.string().min(1, {
    message: "Opd Date is required.",
  }),
  opdSlot: z.string().min(1, {
    message: "Opd Slot is required.",
  }),
  patientName: z.string().min(1, {
    message: "Patient Name is required.",
  }),
  enrollmentDate: z.string().min(1, {
    message: "Enrollment Date is required.",
  }),
  gender: z.string().min(1, {
    message: "Gender is required.",
  }),
  age: z.string().min(1, {
    message: "Age is required.",
  }),
  pincode: z.string().min(1, {
    message: "Pincode is required.",
  }),
  mobile: z.string().min(1, {
    message: "Mobile is required.",
  }),
  state: z.string().min(1, {
    message: "State is required.",
  }),
  city: z.string().min(1, {
    message: "City is required.",
  }),
  address: z.string().min(1, {
    message: "Address is required.",
  }),
  diagnosis: z.string().min(1, {
    message: "Diagnosis is required.",
  }),
  otherComorbidConditions: z.string().min(1, {
    message: "Other Comorbid Conditions is required.",
  }),
  notes: z.string().min(1, {
    message: "Notes is required.",
  }),
  dnd: z.string().min(1, {
    message: "Dnd is required.",
  }),
  type: z.string().min(1, {
    message: "Type is required.",
  }),
  brands: z
    .array(
      z.string().min(1, {
        message: "Brand is required",
      })
    )
    .min(1, {
      message: "Brand is required",
    }),
});

const AddPatient = () => {
  const navigate = useNavigate();

  const [brandTime, setBrandTime] = useState([1]);
  const [type, setType] = useState("");

  const addMoreBrandHandler = () => {
    setBrandTime([...brandTime, 1]);
  };

  const typeHandler = (event: string, onChange: (value: string) => void) => {
    setType(event);
    onChange(event);
  };

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      doctorName: "J Rawat",
      opdDate: "2023-10-28",
      opdSlot: "7:00 PM to 9:00 PM",
      patientName: "",
      enrollmentDate: "2023-10-28",
      gender: "",
      age: "",
      pincode: "",
      mobile: "",
      state: "",
      city: "",
      address: "",
      diagnosis: "",
      otherComorbidConditions: "",
      fasting: "",
      pp: "",
      hba1c: "",
      notes: "",
      dnd: "",
      type: "",
      brands: [""],
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      console.log(values);
    } catch (error) {
      console.log(error);
    }
  };

  const isLoading = form.formState.isSubmitting;

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
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <Card>
              <div className="mb-4">
                <FormField
                  control={form.control}
                  name="doctorName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Doctor Name:</FormLabel>

                      <FormControl>
                        <Input
                          disabled={isLoading}
                          className="bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0 mt-4"
                          readOnly
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex gap-4 mb-4">
                <div>
                  <FormField
                    control={form.control}
                    name="opdDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>OPD Date:</FormLabel>
                        <FormControl>
                          <Input
                            disabled={isLoading}
                            className="bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0 mt-4"
                            readOnly
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div>
                  <FormField
                    control={form.control}
                    name="opdSlot"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>OPD Slot:</FormLabel>
                        <FormControl>
                          <Input
                            disabled={isLoading}
                            className="bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0 mt-4"
                            readOnly
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </Card>

            <Card>
              <p className="font-semibold text-lg mb-4">Patient Details</p>
              <div className="flex gap-4 mb-4">
                <div>
                  <FormField
                    control={form.control}
                    name="patientName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Patient Name:</FormLabel>
                        <FormControl>
                          <Input
                            disabled={isLoading}
                            className="bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0 mt-4"
                            placeholder="Enter Patient Name"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div>
                  <FormField
                    control={form.control}
                    name="enrollmentDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Enrollment Date:</FormLabel>
                        <FormControl>
                          <Input
                            disabled={isLoading}
                            className="bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0 mt-4"
                            readOnly
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <div className="flex gap-4 mb-4">
                <div>
                  <FormField
                    control={form.control}
                    name="gender"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Gender:</FormLabel>
                        <Select
                          disabled={isLoading}
                          onValueChange={field.onChange}
                        >
                          <FormControl>
                            <SelectTrigger className="w-[200px] mt-4 bg-zinc-300/50 border-0 focus:ring-0 text-black ring-offset-0 focus:ring-offset-0 capitalize outline-none">
                              <SelectValue placeholder="Select Gender" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem key="Male" value="Male">
                              Male
                            </SelectItem>
                            <SelectItem key="Female" value="Female">
                              Female
                            </SelectItem>
                            <SelectItem key="Other" value="Other">
                              Other
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div>
                  <FormField
                    control={form.control}
                    name="age"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Age:</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            disabled={isLoading}
                            className="bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0 mt-4"
                            {...field}
                            placeholder="Please Enter Age"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <div className="flex gap-4 mb-4">
                <div>
                  <FormField
                    control={form.control}
                    name="pincode"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Pincode:</FormLabel>
                        <Select
                          disabled={isLoading}
                          onValueChange={field.onChange}
                        >
                          <FormControl>
                            <SelectTrigger className="w-[200px] mt-4 bg-zinc-300/50 border-0 focus:ring-0 text-black ring-offset-0 focus:ring-offset-0 capitalize outline-none">
                              <SelectValue placeholder="Select Pin code" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="400077">400077</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div>
                  <FormField
                    control={form.control}
                    name="mobile"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Mobile No:</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            disabled={isLoading}
                            className="bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0 mt-4"
                            {...field}
                            placeholder="Enter Mobile No."
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <div className="flex gap-4 mb-4">
                <div>
                  <FormField
                    control={form.control}
                    name="state"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>State:</FormLabel>
                        <Select
                          disabled={isLoading}
                          onValueChange={field.onChange}
                        >
                          <FormControl>
                            <SelectTrigger className="w-[200px] mt-4 bg-zinc-300/50 border-0 focus:ring-0 text-black ring-offset-0 focus:ring-offset-0 capitalize outline-none">
                              <SelectValue placeholder="Select State" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="State">State</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div>
                  <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>City:</FormLabel>
                        <Select
                          disabled={isLoading}
                          onValueChange={field.onChange}
                        >
                          <FormControl>
                            <SelectTrigger className="w-[200px] mt-4 bg-zinc-300/50 border-0 focus:ring-0 text-black ring-offset-0 focus:ring-offset-0 capitalize outline-none">
                              <SelectValue placeholder="Select City" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="City">City</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <div className="mb-4">
                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Address:</FormLabel>
                      <FormControl>
                        <Textarea
                          disabled={isLoading}
                          className="bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0 mt-4"
                          {...field}
                          placeholder="Address"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </Card>

            <Card>
              <p className="font-semibold text-lg mb-4">Diagnosis</p>
              <div className="mb-4">
                <FormField
                  control={form.control}
                  name="diagnosis"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Diagnosis:</FormLabel>
                      <Select
                        disabled={isLoading}
                        onValueChange={field.onChange}
                      >
                        <FormControl>
                          <SelectTrigger className="w-full mt-4 bg-zinc-300/50 border-0 focus:ring-0 text-black ring-offset-0 focus:ring-offset-0 capitalize outline-none">
                            <SelectValue placeholder="Select Diagnosis" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="1">Example</SelectItem>
                          <SelectItem value="2">Example</SelectItem>
                          <SelectItem value="3">Example</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="mb-4">
                <FormField
                  control={form.control}
                  name="otherComorbidConditions"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Other comorbid conditions:</FormLabel>
                      <FormControl>
                        <Textarea
                          disabled={isLoading}
                          className="bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0 mt-4"
                          {...field}
                          placeholder="Comorbid conditions"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </Card>

            <Card>
              {brandTime.map((_, index) => {
                return (
                  <div
                    key={index}
                    className="border-yellow-300 border-solid border-2 rounded-lg p-4 mb-4"
                  >
                    <div className="flex gap-4 mb-4">
                      <div>
                        <FormField
                          control={form.control}
                          name={`brands.${index}`}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Brand Name:</FormLabel>
                              <Select
                                disabled={isLoading}
                                onValueChange={field.onChange}
                                value={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger className="w-[190px] mt-4 bg-zinc-300/50 border-0 focus:ring-0 text-black ring-offset-0 focus:ring-offset-0 capitalize outline-none">
                                    <SelectValue placeholder="Select Brand" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="Male">Humalog</SelectItem>
                                  <SelectItem value="Female">
                                    Basalgaar
                                  </SelectItem>
                                  <SelectItem value="Other">Galvus</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <div>
                        <FormField
                          control={form.control}
                          name={`dosagePer.${index}`}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Dosage Per:</FormLabel>
                              <Select
                                disabled={isLoading}
                                onValueChange={field.onChange}
                              >
                                <FormControl>
                                  <SelectTrigger className="w-[190px] mt-4 bg-zinc-300/50 border-0 focus:ring-0 text-black ring-offset-0 focus:ring-offset-0 capitalize outline-none">
                                    <SelectValue placeholder="Select" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="Male">Example</SelectItem>
                                  <SelectItem value="Female">
                                    Example
                                  </SelectItem>
                                  <SelectItem value="Other">Example</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>

                    <div className="mb-4">
                      <FormField
                        control={form.control}
                        name={`sku.${index}`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>SKU:</FormLabel>
                            <Select
                              disabled={isLoading}
                              onValueChange={field.onChange}
                            >
                              <FormControl>
                                <SelectTrigger className="w-full mt-4 bg-zinc-300/50 border-0 focus:ring-0 text-black ring-offset-0 focus:ring-offset-0 capitalize outline-none">
                                  <SelectValue placeholder="Select SKU" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="Male">Example</SelectItem>
                                <SelectItem value="Female">Example</SelectItem>
                                <SelectItem value="Other">Example</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormLabel>Dosage:</FormLabel>
                    <div className="flex gap-1 justify-between items-center my-4">
                      <FormField
                        control={form.control}
                        name="fasting"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                disabled={isLoading}
                                className="w-28 bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0"
                                placeholder="00"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormLabel>M</FormLabel>

                      <FormField
                        control={form.control}
                        name="pp"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                disabled={isLoading}
                                className="w-28 bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0"
                                placeholder="00"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormLabel>A</FormLabel>

                      <FormField
                        control={form.control}
                        name="hba1c"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                disabled={isLoading}
                                className="w-28 bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0"
                                placeholder="00"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormLabel>E</FormLabel>
                    </div>
                  </div>
                );
              })}
              <div className="mt-6 text-yellow-300 border-yellow-300 border-solid border-2 rounded-lg">
                <Button
                  type="button"
                  className="w-full"
                  variant={"outline"}
                  onClick={addMoreBrandHandler}
                >
                  <Plus />
                  Add More Brand
                </Button>
              </div>

              <div className="mt-4">
                <FormLabel>Glucose Level:</FormLabel>
                <div className="flex gap-1 justify-between items-center my-4">
                  <FormField
                    control={form.control}
                    name="fasting"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            disabled={isLoading}
                            className="w-28 bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0 mt-4"
                            placeholder="Fasting"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="pp"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            disabled={isLoading}
                            className="w-28 bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0 mt-4"
                            placeholder="PP"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="hba1c"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            disabled={isLoading}
                            className="w-28 bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0 mt-4"
                            placeholder="HBA1c"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <div className="mb-4">
                <FormField
                  control={form.control}
                  name="type"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Type:</FormLabel>
                      <Select
                        disabled={isLoading}
                        onValueChange={(event) =>
                          typeHandler(event, field.onChange)
                        }
                      >
                        <FormControl>
                          <SelectTrigger className="w-[250px] mt-4 bg-zinc-300/50 border-0 focus:ring-0 text-black ring-offset-0 focus:ring-offset-0 capitalize outline-none">
                            <SelectValue placeholder="Select Type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Enrolled">Enrolled</SelectItem>
                          <SelectItem value="Enrolled + Initiated">
                            Enrolled + Initiated
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
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
                  <FormField
                    control={form.control}
                    name="dnd"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>DND:</FormLabel>
                        <RadioGroup
                          disabled={isLoading}
                          onChange={field.onChange}
                          className="flex gap-6 mt-4"
                        >
                          <FormControl></FormControl>
                          <div className="flex items-center space-x-2">
                            <FormLabel>Yes:</FormLabel>
                            <RadioGroupItem className="" value="yes" />
                          </div>
                          <div className="flex items-center space-x-2">
                            <FormLabel>No:</FormLabel>

                            <RadioGroupItem className="" value="no" />
                          </div>
                        </RadioGroup>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <div className="mb-4">
                <FormField
                  control={form.control}
                  name="notes"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Notes:</FormLabel>
                      <FormControl>
                        <Textarea
                          disabled={isLoading}
                          className="bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0 mt-4"
                          {...field}
                          placeholder="Note"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </Card>

            <div className="flex justify-center items-center m-4">
              <Button className="px-6 bg-yellow-500 hover:bg-yellow-500/90 mb-4">
                Submit
              </Button>
            </div>
          </form>
        </Form>
      </WholeScreen>
    </div>
  );
};

export default AddPatient;
